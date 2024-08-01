import React, { Suspense } from "react";

import ProductsList from "../components/ProductsList";
import LoadingProducts from "../components/LoadingProducts";
import { getProduct, getProducts } from "@/services/products.service";
import ProductDetails from "./components/ProductDetails";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);

  const categoriesIds = product.categories.map((category) => category.id);

  const filters =
    categoriesIds.length > 0
      ? { categories: [categoriesIds[categoriesIds.length - 1]] }
      : undefined;

  const products = (await getProducts(filters, 0, 4)).filter(
    (item) => item.id !== product.id
  );

  return (
    <div className="p-4 max-w-6xl">
      <ProductDetails product={product} />

      <hr className="my-6" />

      <h3 className="sm:p-4 text-2xl font-medium text-secondary">
        Recommended products
      </h3>

      <Suspense fallback={<LoadingProducts length={6} />}>
        <ProductsList products={products} />
      </Suspense>
    </div>
  );
};

export default page;
