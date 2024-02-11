import React from "react";

import Loading from "@/components/Loading";

const LoadingProducts = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
      <div className="flex justify-center gap-7 p-4 w-full flex-wrap">
        { array.map((e) => {
          return <div key={e} className={"flex flex-col gap-4 overflow-hidden pb-4 rounded-xl shadow-sm h-452p max-w-88 w-full"}>
          <Loading />
        </div>
        }) }
      </div>
  );
};

export default LoadingProducts;
