import { createSlice } from "@reduxjs/toolkit";
import { shopsThunk } from "./shopsThunks";

const ShopsSlice = createSlice({
    name: "shops",
    initialState: {
      item: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(shopsThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(shopsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.shops = action.payload;
          })
          .addCase(shopsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
        
    },
  });
  
  export const ShopsReducer = ShopsSlice.reducer;