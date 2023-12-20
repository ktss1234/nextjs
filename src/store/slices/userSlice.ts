import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as serverService from "@/services/serviceServices";
export interface User {
  username: string;
  password: string;
}

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  status: "fetching" | "success" | "failed" | "init";
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  count: 0;
}

const initialState: UserState = {
  accessToken: "",
  username: "",
  status: "init",
  isAuthenticated: false,
  isAuthenticating: true,
  count: 0,
};

export const signUp = createAsyncThunk(
  "user/signp",
  async (credential: User) => {
    const response = await serverService.signUp(credential);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.status = "fetching";
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.count++;
      state.status = "success";
    });
  },
});

export default userSlice.reducer;
export const { add } = userSlice.actions;
export const userSelect = (state: RootState) => state.userReducer;
