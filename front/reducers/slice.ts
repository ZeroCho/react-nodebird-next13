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
  reducers: {
    setUserInfo: (state, action: PayloadAction<User | undefined>) => {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = globalSlice.actions;

export default globalSlice.reducer;
