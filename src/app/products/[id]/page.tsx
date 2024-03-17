import React, { Suspense } from "react";
import axios from "axios";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";
import ProductsList from "../ProductsList";
import LoadingProducts from "../LoadingProducts";
import { getProducts } from "@/utils/functions-share";

const getProduct = async (id: number): Promise<Product> => {
  const response = await axios.get("https://fakestoreapi.com/products/" + id);
  return response.data;
};

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);

  const products = (await getProducts(0, 6, product.category)).filter(
    (item) => item.id !== product.id
  );

  return (
    <div className="p-4 max-w-6xl">
      <ProductCard product={product} />

      <hr className="my-6" />

      <h3 className="sm:p-4 text-2xl font-medium">Related products</h3>

      <Suspense fallback={<LoadingProducts length={6} />}>
        <ProductsList products={products} />
      </Suspense>
    </div>
  );
};

export default page;
