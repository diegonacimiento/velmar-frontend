import React, { Suspense } from "react";

import Search from "./components/Search";
import LoadingProducts from "./components/LoadingProducts";
import Products from "./components/Products";

const page = async ({ searchParams }: { searchParams: any}) => {
  const searchKey = JSON.stringify(searchParams);

  return (
    <div className="flex flex-col py-4">
      <Search />
      <Suspense key={searchKey} fallback={<LoadingProducts />}>
        <Products params={searchParams} />
      </Suspense>
    </div>
  );
};

export default page;
