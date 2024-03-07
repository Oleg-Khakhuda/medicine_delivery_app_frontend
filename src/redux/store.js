import { configureStore } from "@reduxjs/toolkit";
import { ShopsReducer } from "./shops/shopsSlice";
import { ProductsReducer } from "./products/productsSlice";
import { CartReducer } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    shops: ShopsReducer,
    prodacts: ProductsReducer,
    cart: CartReducer
  },
});

