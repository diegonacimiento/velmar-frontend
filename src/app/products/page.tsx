import React, { Suspense } from "react";

import Search from "@/components/Search";
import AllProducts from "./AllProducts";
import LoadingProducts from "./LoadingProducts";
import Paginator from "./Paginator";

const Products = () => {
  return (
    <div className="w-full max-w-2k py-6">
      <div className="m-auto p-3 w-11/12 max-w-650">
        <Search />
      </div>
      <div className="p-4">
        <Suspense fallback={<LoadingProducts />}>
          <AllProducts limit={6} />
        </Suspense>
      </div>

      <Paginator />
    </div>
  );
};

export default Products;
