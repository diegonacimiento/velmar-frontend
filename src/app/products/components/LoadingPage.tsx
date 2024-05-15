import React from "react";

import LoadingProducts from "./LoadingProducts";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center py-6 w-full max-w-2k">
      <div className="m-3 w-11/12 max-w-650">
        <div className="h-[2.625rem] w-full rounded-xl bg-secondary bg-opacity-35 animate-pulse"></div>
        <div className="sm:hidden my-2 h-[2.5625rem] w-30 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></div>
      </div>

      <div className="p-4 w-full">
        <LoadingProducts length={6} />
      </div>

      <div className="m-1 h-16 w-48 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></div>
    </div>
  );
};

export default LoadingPage;
