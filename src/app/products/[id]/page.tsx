import React, { Suspense } from "react";

import ProductsList from "../components/ProductsList";
import LoadingProducts from "../components/LoadingProducts";
import { getProduct, getProducts } from "@/services/products.service";
import ProductDetails from "./components/ProductDetails";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const product = await getProduct(id);

  const products = (await getProducts(undefined, 0, 4)).filter(
    (item) => item.id !== product.id
  );

  return (
    <div className="p-4 max-w-6xl">
      <Link href="/products">
        <button
          type="button"
          className="flex justify-center items-center gap-1 py-3 sm:mx-4 w-max rounded-md text-secondary hover:scale-105 duration-150"
        >
          <IoMdArrowRoundBack />
          Products
        </button>
      </Link>

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
