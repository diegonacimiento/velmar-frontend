import React, { Suspense } from "react";

import Search from "./components/Search";
import LoadingProducts from "./components/LoadingProducts";
import Products from "./components/Products";

const page = async ({ searchParams }: { searchParams: { name: string } }) => {
  return (
    <div className="flex flex-col py-4">
      <Search />
      <Suspense key={searchParams.name} fallback={<LoadingProducts />}>
        <Products name={searchParams.name} />
      </Suspense>
    </div>
  );
};

export default page;
