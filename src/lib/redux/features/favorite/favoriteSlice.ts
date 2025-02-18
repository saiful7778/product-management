import { useAppSelector } from "@/hooks/redux.hooks";
import type { FavoriteProductType } from "@/types";
import { getItem, setItem } from "@/utils/localstorage";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

const localstorageKey = "favorites";
const allFavorites = getItem(localstorageKey) as FavoriteProductType[];

const initialState = {
  products: allFavorites || [],
  totalProducts: allFavorites ? allFavorites?.length : 0,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (
      state,
      action: PayloadAction<Omit<FavoriteProductType, "id">>
    ) => {
      if (
        !state.products.some((product) => product.name === action.payload.name)
      ) {
        state.products.push({ id: nanoid(), ...action.payload });
        state.totalProducts = state.totalProducts + 1;
        setItem(localstorageKey, state.products);
      }
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalProducts = state.totalProducts - 1;
      setItem(localstorageKey, state.products);
    },
  },
});

export const useFavoriteProduct = () =>
  useAppSelector((state) => state.favorite);
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
