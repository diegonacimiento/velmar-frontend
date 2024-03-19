import React from "react";

import Products from "@/app/products/components/Products";

const page = async ({
  params: { categoryId, number },
}: {
  params: { categoryId: string; number: number };
}) => {
  return (
    <Products
      params={{ currentPage: number, category: categoryId }}
      url={`/products/category/${categoryId}/page`}
    />
  );
};

export default page;
