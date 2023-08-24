import { configureStore } from "@reduxjs/toolkit";
import sideBarSliceReducer from "@/lib/slices/sideBarHover";
export const store = configureStore({
  reducer: {
    sidebar: sideBarSliceReducer,
  },
});
