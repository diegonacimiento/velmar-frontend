import React from "react";

import Products from "../../components/Products";

const page = async ({ params: { number } }: { params: { number: number } }) => {
  return <Products params={{ number }} url="/products/page" />;
};

export default page;
