import React from "react";

import { getProducts } from "@/services/products.service";
import ProductsList from "./components/ProductsList";

const ProductsPage = async () => {
  const products = await getProducts();

  return <ProductsList products={products} />
};

export default ProductsPage;
