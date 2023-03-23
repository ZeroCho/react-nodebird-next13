import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "@/typings/user";

export interface GlobalState {
  snackBar: {
    message: string;
    isOpen: boolean;
  };
}

const initialState: GlobalState = {
  snackBar: {
    message: "",
    isOpen: false,
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openSnackBar: (state) => {
      state.snackBar.isOpen = true;
    },
    closeSnackBar: (state) => {
      state.snackBar.isOpen = false;
    },
    setSnackBarMessage: (state, action: PayloadAction<string>) => {
      state.snackBar.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSnackBar, closeSnackBar, setSnackBarMessage } =
  globalSlice.actions;

export default globalSlice.reducer;
