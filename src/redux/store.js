import { configureStore } from "@reduxjs/toolkit";
import PRODUCT_REDUCER from "./slice/product.slice";
import thunk from "redux-thunk";
import logger from "redux-logger";
import CART_REDUCER from "./slice/cart.slice";

const store = configureStore({
    reducer: {
        products: PRODUCT_REDUCER,
        cart: CART_REDUCER
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default store;