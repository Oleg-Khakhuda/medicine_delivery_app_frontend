import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, clearCart, removeFromCart } from '../../redux/cart/cartSlice';
import axios from 'axios';
import { ProductsForm } from '../ProductsForm/ProductsForm';
import s from './CartList.module.css'

export const CartList = () => {
    const cartSelector = useSelector(state => state.cart.cartProducts);
    const [products, setProducts] = useState([...cartSelector]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

    const dispatch = useDispatch();

    useEffect(() => {
        const newTotalPrice = cartSelector.reduce((total, product) => {
          return total + Number(product.price) * (product.amount || 1);
        }, 0);
        setTotalPrice(newTotalPrice);
        setProducts(cartSelector)
      }, [cartSelector]);

    const cartProductRemove = (product) => {
        const cartProduct = cartSelector.some(item => item._id === product._id)
        if(cartProduct) {
            dispatch(removeFromCart(product));
        }
    }

    const handleAmountChange = (productId, e) => {
        const newAmount = e.target.value;
        dispatch(updateQuantity({ _id: productId, quantity: newAmount }));
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const dataCart = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          products: cartSelector.map((product) => ({
            _id: product._id,
            title: product.title,
            owner: product.owner,
            amount: product.amount || 1,
          })),
        };
    
        try {
          const response = await axios.post(
            "https://medicine-delivery-app-backend-h4uu.onrender.com/api/orders",
            dataCart
          );
          if(response) {
            dispatch(clearCart());
            
            setProducts([])
            setData({
                name: "",
                email: "",
                phone: "",
                address: "",
            });
            alert("Order created!");
            }
            } catch (error) {
            console.error("Error:", error);
            }
      };
    
    return (
    <>
      <form className={s.form}>
        {products.length > 0 
        ? <ProductsForm data={data} handleChange={handleChange}/> 
        : <p className={s.text}>Basket is empty</p>}
        <div className={s.product}>
            <ul>
            {products.length > 0 ? products.map(product => 
            <li className={s.list} key={product._id}>
                <img src={product.image} alt={product.title}/>
                <p>{product.title}</p>
                <p>{product.price} $</p>
                <input
                    className={s.input}
                    type="number"
                    name="amount"
                    defaultValue={product.amount || 1}
                    id={product._id}
                    onChange={(e) => handleAmountChange(product._id, e)}
                    min="1"
                    max="100"
                    />
                <button className={s.btnDel} onClick={() => cartProductRemove(product)} type='button'>Delete</button>
            </li>
            ) : null}
            </ul>
        </div>
    </form>
    <div className={s.submit}>
      <p>{`Total price: ${Math.round(totalPrice * 100) / 100}`} $</p> 
      <button className={s.button} type="submit" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}
