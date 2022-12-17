import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import product_api from "../../api/product.api";

const initialState = {
    products: [],
    isLoading: true,
    error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch-all-products", async (params) => {
    console.log({ params })
    const data = await product_api.allProducts();
    return data.data;
})


const productSlice = createSlice({
    name: "PRODUCT SLICE",
    initialState,
    reducers: {
        addProduct(state, { payload }) {
            return {
                ...state,
                products: [payload, ...state.products]
            }
        },
        removeProduct(state, { payload }) {
            return {
                ...state,
                products: state.products.filter(item => item.id !== payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchProducts.pending, (state, action) => {
                state.products = [];
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.error = action.error;
            })
    }
});

export const { addProduct, removeProduct } = productSlice.actions;
const PRODUCT_REDUCER = productSlice.reducer;
export default PRODUCT_REDUCER;