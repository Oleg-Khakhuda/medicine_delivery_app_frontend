import React from 'react'
import { ShopList } from '../../components/ShopList/ShopList'
import { ProductList } from '../../components/ProductList/ProductList'
import { ProductListByShop } from '../../components/ProductListByShop/ProductListByShop'
import { useParams } from 'react-router-dom'
import s from "./ShopPage.module.css"

export const ShopsPage = () => {
  const {shopId} = useParams();
  console.log(shopId);
  return (
    <div className={s.home}>
      <ShopList/>
      {shopId === "medicine_delivery_app_frontend" || shopId === undefined ? <ProductList /> : <ProductListByShop />}
    </div>
  )
}
