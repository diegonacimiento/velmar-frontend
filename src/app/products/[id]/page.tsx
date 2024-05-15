import React, { Suspense } from "react";

import ProductCard from "@/app/products/components/ProductCard";
import ProductsList from "../components/ProductsList";
import LoadingProducts from "../components/LoadingProducts";
import { getProduct, getProducts } from "@/services/products.service";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);

  const products = (await getProducts()).filter(
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
