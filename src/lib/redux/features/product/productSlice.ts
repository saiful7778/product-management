import { useAppSelector } from "@/hooks/redux.hooks";
import type { ProductType } from "@/types";
import { getItem, setItem } from "@/utils/localstorage";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

const localstorageKey = "products";
const allProducts = getItem(localstorageKey) as ProductType[];

const initialState = {
  products: allProducts || [],
  totalProducts: allProducts ? allProducts?.length : 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    seedProduct: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
      state.totalProducts = action.payload.length;
      setItem(localstorageKey, state.products);
    },
    addProduct: (state, action: PayloadAction<Omit<ProductType, "id">>) => {
      state.products.push({ id: nanoid(), ...action.payload });
      state.totalProducts = state.totalProducts + 1;
      setItem(localstorageKey, state.products);
    },
    updateProduct: (state, action: PayloadAction<ProductType>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      setItem(localstorageKey, state.products);
    },
    deleteProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalProducts = state.totalProducts - 1;
      setItem(localstorageKey, state.products);
    },
  },
});

export const useProduct = () => useAppSelector((state) => state.product);
export const { seedProduct, addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
