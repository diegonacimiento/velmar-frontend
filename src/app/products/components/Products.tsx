import React from "react";

import { getProducts } from "@/services/products.service";
import { IProduct } from "@/types/products";
import ProductsPage from "./ProductsPage";

const Products = async ({ params }: { params: any }) => {
  let products: { value: IProduct[]; error: string } = { value: [], error: "" };

  try {
    const response = await getProducts(params);
    products = { value: [...response], error: "" };
    if (response.length === 0) {
      products.error = "There are no products for your search";
    }
  } catch (error) {
    products = { value: [], error: "There was an error, try again" };
  }

  return <ProductsPage products={products} />;
};

export default Products;
