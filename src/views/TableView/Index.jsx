import React from "react";
import { useGetProductsQuery } from "../../features/api/rtk-slice/product.api";
import Table from "./Table";

const TableView = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
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
    <div className="container py-4">
      <Table
        title="Table One"
        data={data}
        fields={[
          { title: "Title", query: "title" },
          { title: "Price", query: "price" },
          { title: "Rating", query: "rating.rate" },
        ]}
      />
      <br />
      <hr className="border-0 h-[2px] bg-gradient-to-r from-indigo-300 to-transparent rounded-lg my-4" />
      <br />

      <Table
        title="Table Tow"
        data={data}
        fields={[
          { title: "Title", query: "title" },
          { title: "Image", query: "image" },
          { title: "Rating", query: "rating.rate" },
        ]}
      />
      <br />
      <hr className="border-0 h-[2px] bg-gradient-to-r from-indigo-300 to-transparent rounded-lg my-4" />
      <br />

      <Table
        title="Table Three"
        data={data}
        fields={[
          { title: "Title", query: "title" },
        ]}
      />
    </div>
  );
};

export default TableView;
