
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { productsThunk } from '../../redux/products/productsThunks';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import s from "./ProductList.module.css"

export const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(productsThunk()).then(data => setProducts(data.payload.products))
  }, [dispatch])

  return (
    <div className={s.list}>
      <ul className={s.item}>
      {products && products.map(product => {
      return <ProductsItem key={product._id} product={product}/>
    })}
    </ul>
    </div>
  )
}
