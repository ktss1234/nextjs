import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "@/store/slices/userSlice";
import productSlice from "@/store/slices/productSlice";

const reducer = { userReducer, productSlice };

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
