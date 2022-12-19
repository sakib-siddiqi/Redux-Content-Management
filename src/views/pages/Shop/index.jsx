import React from "react";
import { useGetProductsQuery } from "../../../features/api/rtk-slice/product.api";
import ProductCard from "../../common/card/Product.card";

const Shop = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  if (isLoading)
    return (
      <div className="container my-6">
        <h1 className="text-lg text-slate-800 font-bold tracking-wide">
          Loading...
        </h1>
      </div>
    );
  if (isError)
    return (
      <div className="container my-6">
        <h1 className="text-lg text-slate-800 font-bold tracking-wide">
          Error:{error}
        </h1>
      </div>
    );
  return (
    <div className="container my-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
