import React from "react";

import Search from "@/app/products/components/Search";
import ProductsList from "./ProductsList";
import Paginator from "./Paginator";
import { getProducts } from "@/utils/functions-share";

const Products = async ({
  params: { currentPage, category, name },
  url,
}: {
  params: { currentPage: number; category?: string; name?: string };
  url: string;
}) => {
  const offset = (currentPage - 1) * 3;
  const limit = offset + 4;

  const products = await getProducts(offset, limit, category, name);

  const isLastPage = products.length < 4;

  if (!isLastPage) products.pop();

  return (
    <div className="py-6 w-full max-w-2k">
      <div className="py-3 m-auto w-11/12 max-w-650">
        <Search currentCategory={category} currentSearch={name} />
      </div>

      <div className="p-4">
        {products.length === 0 ? (
          <h3 className="text-xl text-center text-secondary font-semibold">Product not found...</h3>
        ) : (
          <ProductsList products={products} />
        )}
      </div>

      <Paginator
        pageNumber={Number(currentPage)}
        isLastPage={isLastPage}
        url={url}
      />
    </div>
  );
};

export default Products;
