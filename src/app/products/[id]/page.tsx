import React, { Suspense } from "react";
import axios from "axios";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";
import AllProducts from "../AllProducts";
import LoadingProducts from "../LoadingProducts";

const getProduct = async (id: number): Promise<Product> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get("https://fakestoreapi.com/products/" + id);
  return response.data;
};

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);
  return (
    <div className="p-4 max-w-6xl">
      <ProductCard product={product} />
      <h3 className="p-4 text-2xl font-medium">Related products</h3>
      {
        <div className="">

        <Suspense fallback={<LoadingProducts length={6} />}>
          <AllProducts />
        </Suspense>
        </div>
      }
    </div>
  );
};

export default page;
