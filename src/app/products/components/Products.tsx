import React from "react";

import Search from "@/app/products/components/Search";
import ProductsList from "./ProductsList";
import Paginator from "./Paginator";
import { getProducts } from "@/utils/functions-share";

const Products = async ({
  params: { number, category },
  url,
}: {
  params: { number: number; category?: string };
  url: string;
}) => {
  const offset = (number - 1) * 3;
  const limit = offset + 4;

  const products = await getProducts(offset, limit, category);

  const isLastPage = products.length < 4;

  if (!isLastPage) products.pop();

  return (
    <div className="py-6 w-full max-w-2k">
      <div className="py-3 m-auto w-11/12 max-w-650">
        <Search currentCategory={category} />
      </div>

      <div className="p-4">
        <ProductsList products={products} />
      </div>

      <Paginator pageNumber={Number(number)} isLastPage={isLastPage} url={url} />
    </div>
  );
};

export default Products;
