import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import {
    useCreateProductMutation,
    useGetProductsQuery
} from "../../features/api/rtk-slice/product.api";

const CreateProduct = () => {
  const [create, { isLoading, isError, data }] =
    useCreateProductMutation();
  const dispatch = useDispatch();
  console.log(data);

  function onCreate() {
    dispatch(
      create({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
    );
  }

  return (
    <div className="text-end mb-3">
      <button
        onClick={onCreate}
        disabled={isLoading}
        className="btn btn-primary px-4 py-3 h-auto min-h-[auto] tracking-wider"
      >
        {isLoading?"Loading...":'Create'}
      </button>
      {isError && <span>try again</span>}
    </div>
  );
};

const DashboardProducts = () => {
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
    <section>
      <div className="container py-5">
        <CreateProduct />
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="bg-transparent"></th>
                <th className="bg-transparent">Title</th>
                <th className="bg-transparent">Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{product.title}</td>
                  <td>
                    <button className="mx-auto p-1 rounded-md ring-2 ring-rose-300 active:ring-offset-1 bg-rose-600 hover:bg-rose-700 text-white font-bold border-2">
                      <TrashIcon
                        className="h-6 w-6"
                        aria-label="Remove from cart"
                      />
                    </button>
                    <button className="ml-2 mx-auto p-1 rounded-md ring-2 ring-blue-300 active:ring-offset-1 bg-blue-600 hover:bg-blue-700 text-white font-bold border-2">
                      <PencilIcon
                        className="h-6 w-6"
                        aria-label="Remove from cart"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardProducts;
