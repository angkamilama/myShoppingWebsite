import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Product = {
  title: string;
  price: string;
  image: string;
  id: string;
  count: number;
};

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
        state.products.push(action.payload);
      }
    },

    increment: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.count++;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product && product.count > 0) {
        product.count--;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        const index = state.products.indexOf(product);
        console.log(index);
        state.products.splice(index, 1);
      }
    },
  },
});
export const { addProduct, decrement, increment, deleteProduct } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
