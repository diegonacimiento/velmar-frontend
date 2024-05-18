import React from "react";

import { getProducts, getProductsByName } from "@/services/products.service";
import { IProduct } from "@/types/products";
import ProductsPage from "./ProductsPage";

const Products = async ({ name }: { name: string }) => {
  let products: IProduct[] = [];

  if (name) {
    products = await getProductsByName(name);
  } else {
    products = await getProducts();
  }
  return <ProductsPage products={products} />;
};

export default Products;
