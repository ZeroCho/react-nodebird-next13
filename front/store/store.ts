import { globalSlice } from "@/reducers/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
  return configureStore({
    reducer: {
      global: globalSlice.reducer,
    },
  });
};
type StoreType = ReturnType<typeof store>;

export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];
