import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type product = {
  title: string;
  price: string;
  image: string;
  id: string;
};

export interface productState {
  products: product[];
}

const initialState: productState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<product>) => {
      state.products.push(action.payload);
    },
    // deleteProduct: (state, action: PayloadAction<product>) => {
    //   let y = state.products.indexOf(action.payload);
    //   return state.products.splice(y, 1);
    // },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (product) => product.title === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});
export const { addProduct, deleteProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
