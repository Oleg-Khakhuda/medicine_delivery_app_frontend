import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navigation.module.css"

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={({ isActive }) =>
      isActive ? s.link : undefined}>Shop</NavLink>
      <NavLink to="/cart" className={({ isActive }) =>
      isActive ? s.link : undefined }>Shopping Cart</NavLink>
    </nav>
  )
}
