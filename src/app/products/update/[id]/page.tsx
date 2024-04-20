import React from "react";
import axios from "axios";

import { Product } from "@/types/products";
import UpdateProduct from "../components/UpdateProduct";
import { getProduct } from "@/services/products.service";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);

  return <UpdateProduct product={product} />;
};

export default page;
