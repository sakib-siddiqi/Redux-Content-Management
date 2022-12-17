import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../common/card/Product.card";

const Home = () => {
  const products = useSelector((store) => store.products);

  if (products?.products?.isLoading)
    return (
      <div className="container my-6">
        <h1 className="text-lg text-slate-800 font-bold tracking-wide">
          Loading...
        </h1>
      </div>
    );
  if (products?.products?.error)
    return (
      <div className="container my-6">
        <h1 className="text-lg text-slate-800 font-bold tracking-wide">
          Error:{products?.products?.error?.message}
        </h1>
      </div>
    );

  return (
    <div className="container my-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products?.products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
