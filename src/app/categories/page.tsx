import React from "react";

import { getCategories } from "@/services/categories.service";
import CategoriesList from "./components/CategoriesList";

const page = async () => {
  const categories = await getCategories();

  return <CategoriesList categories={categories} />;
};

export default page;
