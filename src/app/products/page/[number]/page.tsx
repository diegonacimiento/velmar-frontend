import React from "react";

import Products from "../../Products";

const page = async ({ params: { number } }: { params: { number: number } }) => {
  return <Products params={{ number }} />;
};

export default page;
