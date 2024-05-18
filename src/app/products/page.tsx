import React from "react";

import { getProducts } from "@/services/products.service";
import ProductsPage from "./components/ProductsPage";

const page = async () => {
  const products = await getProducts();

  return <ProductsPage products={products} />
};

export default page;
