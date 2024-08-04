import React from "react";

const LoadingBrandCU = () => {
  return (
    <div className="flex flex-col gap-4 p-4 mb-4 max-w-96">
      <div className="flex flex-col gap-2">
        <div className="h-5 w-14 rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
        <div className="h-10 w-full rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
        <div className="h-4 w-full"></div>
      </div>

      <div className="flex justify-center gap-4">
        <div className="h-12 w-60 mt-4 bg-secondary bg-opacity-35 animate-pulse"></div>
        <div className="h-12 w-60 mt-4 bg-secondary bg-opacity-35 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingBrandCU;
