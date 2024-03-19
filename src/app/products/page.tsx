import React from "react";

import Products from "./components/Products";

const ProductsPage = async () => {
  return <Products params={ { currentPage: 1 } } url="/products/page" />;
};

export default ProductsPage;
