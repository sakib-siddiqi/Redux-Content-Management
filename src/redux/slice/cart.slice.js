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
            return exist_in_cart ? [data,...state.filter(ele=>ele?.id!==exist_in_cart?.id)] : [data, ...state];
        },
        remove_from_cart(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { add_to_cart, remove_from_cart } = cartSlice.actions;
const CART_REDUCER = cartSlice.reducer;
export default CART_REDUCER;