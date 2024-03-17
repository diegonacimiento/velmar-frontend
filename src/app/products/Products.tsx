import React from "react";

import Search from "@/components/Search";
import ProductsList from "./ProductsList";
import Paginator from "./Paginator";
import { getProducts } from "@/utils/functions-share";

const Products = async ({
  params: { number, category },
}: {
  params: { number: number; category?: string };
}) => {
  const offset = (number - 1) * 3;
  const limit = offset + 4;

  const products = await getProducts(offset, limit, category);

  const endPage = products.length < 4;

  if (!endPage) products.pop();

  return (
    <div className="py-6 w-full max-w-2k">
      <div className="p-3 m-auto w-11/12 max-w-650">
        <Search />
      </div>

      <div className="p-4">
        <ProductsList products={products} />
      </div>

      <Paginator page={Math.ceil(limit / 4)} endPage={endPage} />
    </div>
  );
};

export default Products;
