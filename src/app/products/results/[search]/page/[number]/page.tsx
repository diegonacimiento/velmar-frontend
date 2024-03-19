import React from "react";

import Products from "@/app/products/components/Products";

const page = async ({
  params: { search, number },
}: {
  params: { search: string; number: number };
}) => {
  return (
    <Products
      params={{ currentPage: number, name: search }}
      url={`/products/results/${search}/page`}
    />
  );
};

export default page;
