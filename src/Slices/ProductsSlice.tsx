import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface product {
  name: string;
  price: number;
}

const initialState: product[] = [{ name: "", price: 0 }];

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<product>) => {
      state.push(action.payload);
    },
  },
});
export const { addProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
