import { ProductData } from "@/models/product.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as serverService from "@/services/serviceServices";
import { RootState } from "../store";

interface ProductState {
  product: ProductData[];
}

const initialState: ProductState = {
  product: [],
};

export const getProducts = createAsyncThunk(
  "product/getProdcut",
  async (keyword?: string) => {
    const responce = await serverService.getProduct(keyword);
    return responce;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;