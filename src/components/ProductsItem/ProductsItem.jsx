import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import s from './ProductItem.module.css'

export const ProductsItem = ({product}) => {
  const dispatch = useDispatch();
  const cartSelector = useSelector(state => state.cart.cartProducts);

  const addToCartBtn = (productId) => {
    const cart = cartSelector.some(item => item._id === productId)
    if(cart) {
      alert("Product is already in the basket")
    } else {
      dispatch(addToCart(product));
      alert("Add to Cart")
    }
  }

  return (
    <li className={s.item}>
      <img src={product.image} alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price} $</p>
      <button className={s.button} onClick={() => addToCartBtn(product._id)} type='button'>Add to Cart</button>
    </li>
   
    
  )
}
