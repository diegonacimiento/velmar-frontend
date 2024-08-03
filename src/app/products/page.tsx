import React, { Suspense } from "react";

import Search from "./components/Search";
import LoadingProducts from "./components/LoadingProducts";
import Products from "./components/Products";
import LoadingPage from "./components/LoadingPage";

const page = async ({ searchParams }: { searchParams: any }) => {
  const searchKey = JSON.stringify(searchParams);

  return (
    <div className="flex flex-col py-4 w-full">
      <Suspense key={searchKey} fallback={<LoadingPage />}>
        <Products params={searchParams} />
      </Suspense>
    </div>
  );
};

export default page;
