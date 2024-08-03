import React, { Suspense } from "react";

import Products from "./components/Products";
import LoadingPage from "./components/LoadingPage";

const page = async ({ searchParams }: { searchParams: any }) => {
  const searchKey = JSON.stringify(searchParams);

  return (
    <div className="flex flex-col py-4 w-full">
      <Suspense
        key={searchKey}
        fallback={
          <div className="flex justify-center w-full">
            <LoadingPage />
          </div>
        }
      >
        <Products params={searchParams} />
      </Suspense>
    </div>
  );
};

export default page;
