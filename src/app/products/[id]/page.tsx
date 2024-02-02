import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";
import axios from "axios";
import React from "react";

const getProduct = async (id: number): Promise<Product> => {
  const response = await axios.get("https://fakestoreapi.com/products/" + id);
  return response.data;
};

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);
  return <ProductCard product={product} />;
};

export default page;
