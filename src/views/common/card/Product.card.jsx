import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <figure className="p-2 rounded-md transition-all duration-200 border-2 border-indigo-200 hover:border-indigo-600 hover:scale-110 hover:shadow-2xl bg-white" title={product.title}>
      <img
        src={product.image}
        alt={product.title}
        className="rounded-sm mb-5 h-44 object-contain object-center mx-auto p-3"
      />
      <hr />
      <div className="mt-2 flex flex-col justify-between">
        <h4 className="font-semibold tracking-wide truncate ">{product?.title}</h4>
        <div className="flex gap-3 mt-2">
          <button className="bg-indigo-600 active:bg-indigo-800 text-white p-2 rounded-md">
            <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </figure>
  );
};

export default ProductCard;
