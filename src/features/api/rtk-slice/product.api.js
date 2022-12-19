
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROOT_API_URL } from '..';

const product_api = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: ROOT_API_URL }),
    tagTypes: ['get-products', "post-products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['get-products']
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['get-products']
        })
    })
});

export const {
    useGetProductsQuery,
    useCreateProductMutation
} = product_api;

export default product_api;