import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Types";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const isDuplicate = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (!isDuplicate) {
        state.products = [...state.products, action.payload];
      }
    },

    increment: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.count++;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product && product.count > 0) {
        product.count--;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});
export const { addProduct, decrement, increment, deleteProduct } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
