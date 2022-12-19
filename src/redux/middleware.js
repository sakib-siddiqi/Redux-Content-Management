import { add_to_cart } from "./slice/cart.slice";

const middlewares = {};

middlewares.cartPossition = ({ getState, dispatch }) => (next) => (action) => {
    if (action.type === add_to_cart.type) {
        const CART = getState().cart;
        const exist_in_cart = CART.find(ele => ele?.id === action?.payload?.id);
        if (!exist_in_cart) {
            action.payload = {
                ...action.payload,
                cart_position: CART?.length || 0
            };
            return next(action);
        }
        return next(action);
    }
    return next(action)
}

export default middlewares;