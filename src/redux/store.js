import { configureStore } from "@reduxjs/toolkit";
import RTK_QUERYS_REDUCERS, { API_MIDDPLEWARES } from "../features/api/rtk-slice";
import middlewares from "./middleware";
import CART_REDUCER from "./slice/cart.slice";
import PRODUCT_REDUCER from "./slice/product.slice";

const store = configureStore({
    reducer: {
        products: PRODUCT_REDUCER,
        cart: CART_REDUCER,
        ...RTK_QUERYS_REDUCERS
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([middlewares.cartPossition, ...API_MIDDPLEWARES])
    },
});

export default store;
