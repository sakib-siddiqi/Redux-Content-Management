import product_api from "./product.api";


export const API_MIDDPLEWARES=[product_api.middleware];
const RTK_QUERYS_REDUCERS = {
    [product_api.reducerPath]: product_api.reducer,
};

export default RTK_QUERYS_REDUCERS;