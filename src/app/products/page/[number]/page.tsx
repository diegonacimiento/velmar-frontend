import React, { Suspense } from "react";

import Search from "@/components/Search";
import LoadingProducts from "../../LoadingProducts";
import ProductsList from "../../ProductsList";
import Paginator from "../../Paginator";
import { getProducts } from "@/utils/functions-share";

const page = async ({ params: { number } }: { params: { number: number } }) => {
  const offset = (number - 1) * 6;
  const limit = offset + 7;

  const products = await getProducts(offset, limit);

  let endPage;

  if (products.length < 7) {
    endPage = true;
  }

  if (!endPage) products.pop();

  return (
    <div className="py-6 w-full max-w-2k">
      <div className="p-3 m-auto w-11/12 max-w-650">
        <Search />
      </div>

      <div className="p-4">
        <Suspense fallback={<LoadingProducts length={6} />}>
          <ProductsList products={products} />
        </Suspense>
      </div>

      <Paginator page={Number(number)} endPage={endPage} />
    </div>
  );
};

export default page;
