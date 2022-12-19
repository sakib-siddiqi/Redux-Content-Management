import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "CART",
    initialState,
    reducers: {
        add_to_cart(state, action) {
            const exist_in_cart = state.find(ele => ele?.id === action?.payload?.id);
            let data = {
                ...(exist_in_cart || action?.payload),
                quantity: (exist_in_cart?.quantity || 0) + 1
            };
            const result = exist_in_cart ? [data, ...state.filter(ele => ele?.id !== exist_in_cart?.id)] : [data, ...state];
            return result?.sort((a, b) => b?.cart_position - a?.cart_position);
        },
        remove_from_cart(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        incrimentCart(state, { payload }) {
            const exist_in_cart = state.find(ele => ele?.id === payload);
            let data = {
                ...(exist_in_cart),
                quantity: (exist_in_cart?.quantity || 0) + 1
            };
            const result = exist_in_cart ? [data, ...state.filter(ele => ele?.id !== exist_in_cart?.id)] : [data, ...state];
            return result?.sort((a, b) => b?.cart_position - a?.cart_position);
        },
        decrimentCart(state, { payload }) {
            const exist_in_cart = state.find(ele => ele?.id === payload);
            const quantity = ((exist_in_cart?.quantity || 0) - 1);
            let data = {
                ...(exist_in_cart),
                quantity: quantity >= 1 ? quantity : 1
            };
            const result = exist_in_cart ? [data, ...state.filter(ele => ele?.id !== exist_in_cart?.id)] : [data, ...state];
            return result?.sort((a, b) => b?.cart_position - a?.cart_position);
        }
    }
});

export const { add_to_cart, remove_from_cart, decrimentCart, incrimentCart } = cartSlice.actions;
const CART_REDUCER = cartSlice.reducer;
export default CART_REDUCER;