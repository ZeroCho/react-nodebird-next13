import { globalSlice } from "@/reducers/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = (userInfo: any) => {
  console.log(userInfo);
  return configureStore({
    reducer: {
      global: globalSlice.reducer,
    },
    preloadedState: { global: { userInfo: userInfo } },
  });
};
type StoreType = ReturnType<typeof store>;

export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];
