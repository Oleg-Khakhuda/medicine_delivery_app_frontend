import React from 'react'
import s from './ProductForm.module.css'

export const ProductsForm = ({data, handleChange}) => {
  return (
    <div className={s.form}>
        <label>
            Name:
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              title="Name should contain only letters and be at least 2 characters long"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
              title="Phone number should consist only numbers"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>
  )
}
