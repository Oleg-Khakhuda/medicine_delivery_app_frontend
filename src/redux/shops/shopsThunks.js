import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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