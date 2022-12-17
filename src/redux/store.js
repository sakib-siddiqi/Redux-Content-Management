import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import PRODUCT_REDUCER from "./slice/product.slice";

const store = configureStore({
    reducer: {
        products: PRODUCT_REDUCER
    },
    middleware: getDefaultMiddleware(),
});

export default store;