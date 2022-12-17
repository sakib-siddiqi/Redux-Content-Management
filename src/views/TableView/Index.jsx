import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Table from "./Table";

const API_URL = "https://fakestoreapi.com/products";
const TableView = () => {
  const { data, isLoading, error } = useQuery("fake-store-products", () => {
    return axios(API_URL).then((dt) => dt.data);
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return error;

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
