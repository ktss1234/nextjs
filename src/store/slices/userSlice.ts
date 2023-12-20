import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as serverService from "@/services/serviceServices";
export interface User {
  username: string;
  password: string;
}

export const signup = createAsyncThunk(
  "user/signup",
  async (credential: User) => {
    const response = await serverService.signUp(credential);
    return response;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: { count: 0 },
  reducers: {
    add: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.count++;
    });
  },
});

export default userSlice.reducer;
export const { add } = userSlice.actions;
export const userSelect = (state: RootState) => state.userReducer;
