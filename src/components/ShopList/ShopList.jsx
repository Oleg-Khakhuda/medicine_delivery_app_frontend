import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { shopsThunk } from '../../redux/shops/shopsThunks';
import { NavLink } from 'react-router-dom';
import s from "./ShopList.module.css"

export const ShopList = () => {
  const dispatch = useDispatch();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    dispatch(shopsThunk()).then(data => setShops(data.payload))
  }, [dispatch])

  return (
    <div className={s.list}>
      <h3 className={s.title}>Shops:</h3>
      <ul className={s.item}>
        {shops && shops.map(item => 
          <li key={item._id} className={s.shops}>
            <NavLink to={item._id} 
            className={({ isActive }) =>
              isActive ? s.link : undefined }
      >
              <p className={s.text}>{item.name}</p>
            </NavLink> 
          </li>
          )}
      </ul>
    </div>
  )
}
