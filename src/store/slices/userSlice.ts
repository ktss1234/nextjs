import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState: { count: 0 },
  reducers: {
    add: (state) => {
      state.count++;
    },
  },
});

export default userSlice.reducer;
export const { add } = userSlice.actions;
export const userSelect = (state: RootState) => state.userReducer;
