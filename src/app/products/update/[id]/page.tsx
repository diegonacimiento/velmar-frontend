import React from "react";

import UpdateProduct from "../components/UpdateProduct";
import { getProduct } from "@/services/products.service";
import { getCategories } from "@/services/categories.service";
import { getBrands } from "@/services/brands.service";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);
  const categories = await getCategories();
  const brands = await getBrands();

  return <UpdateProduct product={product} categories={categories} brands={brands} />;
};

export default page;
