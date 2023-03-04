import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "@/typings/user";

export interface GlobalState {
  userInfo: User | undefined;
}

const initialState: GlobalState = {
  userInfo: undefined,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = globalSlice.actions;

export default globalSlice.reducer;
