import React from "react";

import Products from "@/app/products/Products";

const page = async ({
  params: { categoryId, number },
}: {
  params: { categoryId: string; number: number };
}) => {
  return <Products params={{ number, category: categoryId }} />;
};

export default page;
