import React from "react";
import LoadingProducts from "../components/LoadingProducts";

const loading = () => {
  return (
    <div className="h-full w-full px-4 max-w-6xl">
      <div className="flex flex-col overflow-hidden sm:flex-row min-h-600p w-full gap-12 sm:px-4 py-8 m-auto">
        <figure
          className={
            "relative w-full duration-150 h-[25rem] sm:h-[34.375rem] bg-secondary bg-opacity-35 animate-pulse"
          }
        ></figure>
        <div className="flex flex-col gap-6 px-4 w-full">
          <h1
            className={
              "text-lg font-bold px-4 h-14 rounded-xl bg-secondary bg-opacity-35 animate-pulse"
            }
          ></h1>
          <p className="text-lg font-semibold h-7 w-30 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <div className="flex items-center justify-between gap-4">
            <div className="h-10 w-30 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></div>

            <div className="h-12 w-40 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></div>
          </div>
          <hr />
          <h3 className="h-7 w-full rounded-xl bg-secondary bg-opacity-35 animate-pulse"></h3>
          <span className="px-2">
            {" "}
            <p className="h-18 w-full rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>
          </span>
        </div>
      </div>

      <hr className="my-6" />

      <h3 className="sm:p-4 text-2xl font-medium">Related products</h3>

      <LoadingProducts length={6} />
    </div>
  );
};

export default loading;
