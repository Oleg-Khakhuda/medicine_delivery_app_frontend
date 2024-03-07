import React from 'react'
import { ShopList } from '../../components/ShopList/ShopList'
import { ProductList } from '../../components/ProductList/ProductList'
import { ProductListByShop } from '../../components/ProductListByShop/ProductListByShop'
import { useParams } from 'react-router-dom'
import s from "./ShopPage.module.css"

export const ShopsPage = () => {
  const {shopId} = useParams();
  return (
    <div className={s.home}>
      <ShopList/>
      {!shopId ? <ProductList /> : <ProductListByShop />}
    </div>
  )
}
