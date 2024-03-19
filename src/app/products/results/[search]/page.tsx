import React from "react";
import Products from "../../components/Products";

const Results = ({ params: { search } }: { params: { search: string } }) => {
  return (
    <Products
      params={{ currentPage: 1, name: search }}
      url={`/products/results/${search}/page`}
    />
  );
};

export default Results;
