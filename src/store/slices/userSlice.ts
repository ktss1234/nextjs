import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState: { count: 10 },
  reducers: {},
});

export default userSlice.reducer;
export const userSelect = (state: RootState) => state.userReducer; 