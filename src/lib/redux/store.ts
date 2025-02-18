import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";

export const store = () => {
  return configureStore({
    reducer: {
      product: productReducer,
      favorite: favoriteReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
