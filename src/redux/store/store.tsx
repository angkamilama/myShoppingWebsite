import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "../Slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
  },
});

console.log(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
