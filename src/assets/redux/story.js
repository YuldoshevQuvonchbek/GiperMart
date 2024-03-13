import { configureStore } from "@reduxjs/toolkit";
import productRedusser from "./redusser/product-redusser";
export const store = configureStore({
  reducer: {
    product: productRedusser,
  },
});
