import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "./productsThunks";
import { productsByShopThunk } from "./productsThunks";

const ProductsSlice = createSlice({
    name: "products",
    initialState: {
      item: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(productsThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(productsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.shops = action.payload;
        })
        .addCase(productsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(productsByShopThunk.pending, (state, action) => {
          state.isLoading = true;
      })
      .addCase(productsByShopThunk.fulfilled, (state, action) => {
          state.isLoading = false;
          state.shops = action.payload;
      })
      .addCase(productsByShopThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })  
    },
  });
  
  export const ProductsReducer = ProductsSlice.reducer;