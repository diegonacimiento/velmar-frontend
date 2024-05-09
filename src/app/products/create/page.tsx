import React from "react";

import Form from "../components/form/Form";
import { getCategories } from "@/services/categories.service";
import { getBrands } from "@/services/brands.service";

const page = async () => {
  const categories = await getCategories();
  const brands = await getBrands();

  return <Form brands={brands} categories={categories} />;
};

export default page;
