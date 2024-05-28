import React from "react";

import { getBrands } from "@/services/brands.service";
import BrandsList from "./components/BrandsList";

const page = async () => {
  const brands = await getBrands();

  return <BrandsList brands={brands} />;
};

export default page;