import React, { Suspense } from "react";

import Search from "@/components/Search";
import ProductsList from "./ProductsList";
import LoadingProducts from "./LoadingProducts";
import Paginator from "./Paginator";
import { getProducts } from "@/utils/functions-share";

const ProductsPage = async () => {
  const products = await getProducts(0, 7);

  products.pop();

  return (
    <div className="py-6 w-full max-w-2k">
      <div className="p-3 m-auto w-11/12 max-w-650">
        <Search />
      </div>

      <div className="p-4">
        {/* <Suspense fallback={<LoadingProducts length={6} />}> */}
          <ProductsList products={products} />
        {/* </Suspense> */}
      </div>

      <Paginator page={1} />
    </div>
  );
};

export default ProductsPage;
