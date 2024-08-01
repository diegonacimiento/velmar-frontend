import React from "react";

const loading = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col gap-6 p-6 sm:p-12 items-center my-4 rounded-lg m-auto max-w-520 w-full bg-primary animate-pulse">
        <div className="h-8 w-4/5 rounded-md bg-secondary bg-opacity-30 animate-pulse"></div>
        <div className="h-12 w-3/4 rounded-md bg-secondary bg-opacity-30 animate-pulse"></div>
        <div className="h-16 w-11/12 rounded-md bg-secondary bg-opacity-30 animate-pulse"></div>

        <div className="flex flex-wrap justify-center gap-3 xsm:gap-6">
          <div className="w-36 rounded-md h-8 bg-secondary bg-opacity-30 animate-pulse"></div>
          <div className="w-36 rounded-md h-8 bg-secondary bg-opacity-30 animate-pulse"></div>
        </div>
        <div className="h-8 w-full"></div>
      </div>
    </div>
  );
};

export default loading;
