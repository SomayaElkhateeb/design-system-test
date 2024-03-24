import { configureStore } from "@reduxjs/toolkit";
import discounts from "./slices/marketing/marketingSlice";
import productReducer from "./slices/product/productSlice";
export default configureStore({
  reducer: {
    discounts,
    //mohammed
    products: productReducer,
  },
});
