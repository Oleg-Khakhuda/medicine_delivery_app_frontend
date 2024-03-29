import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://medicine-delivery-app-backend-h4uu.onrender.com"

export const productsThunk = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axios.get("/api/products");
        return data;
      } catch (error) {
        rejectWithValue({ error: error.message });
      }
    }
  );

export const productsByShopThunk = createAsyncThunk(
  "products/fetchProductsByShop",
  async (shopId, { rejectWithValue }) => {
    try {
      const {data} = await axios.get(`/api/products/${shopId}`);
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);