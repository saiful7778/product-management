import { useAppSelector } from "@/hooks/redux.hooks";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  status: string;
}

const initialState: ProductState[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductState>) => {
      state.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<ProductState>) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<ProductState>) => {
      state = state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const useProduct = () => useAppSelector((state) => state.product);
export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
