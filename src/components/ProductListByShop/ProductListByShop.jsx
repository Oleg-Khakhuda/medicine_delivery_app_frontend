
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { productsByShopThunk } from '../../redux/products/productsThunks';
import { useParams } from 'react-router-dom';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import s from './ProdactListByShop.module.css'
export const ProductListByShop = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const { shopId } = useParams();

  useEffect(() => {
    dispatch(productsByShopThunk(shopId)).then(data => setProducts(data.payload.products))
  }, [dispatch, shopId]);

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
