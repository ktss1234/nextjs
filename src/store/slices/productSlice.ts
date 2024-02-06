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
  "product/getProduct",
  async (keyword?: string) => {
    const responce = await serverService.getProducts(keyword);
    return responce;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (values: ProductData) => {
    let data = new FormData();
    data.append("name", values.name);
    data.append("price", String(values.price));
    data.append("stock", String(values.stock));
    if (values.file) {
      data.append("image", values.file);
    }
    const response = await serverService.addProduct(data);
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id: string) => {
    await serverService.deleteProduct(id);
  }
);

export const editProduct = createAsyncThunk(
  "product/addProduct",
  async (values: ProductData) => {
    let data = new FormData();
    data.append("id", String(values.id));
    data.append("name", values.name);
    data.append("price", String(values.price));
    data.append("stock", String(values.stock));

    if (values.file) {
      data.append("image", values.file);
    }
    const response = serverService.editProduct(data);
    return response;
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
export const productSelector = (state: RootState) => state.productReducer ;