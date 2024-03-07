import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://medicine-delivery-app-backend-h4uu.onrender.com"

export const shopsThunk = createAsyncThunk(
    "shops/fetchShops",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axios.get("api/shops");
        return data.shops;
      } catch (error) {
        rejectWithValue({ error: error.message });
      }
    }
  );