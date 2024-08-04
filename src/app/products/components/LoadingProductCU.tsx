import React from "react";

const LoadingProductCU = () => {
  return (
    <div className="h-full w-full p-4 max-w-6xl">
      <div className="flex flex-col overflow-hidden md:flex-row min-h-600p w-full gap-12 m-auto">
        <div className="flex flex-col h-full w-full gap-4">
          <figure className="relative w-full duration-150 h-[25rem] sm:h-[40rem] bg-secondary bg-opacity-35 animate-pulse"></figure>

          <div className="my-8 h-12 w-full rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-5 w-14 rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-18 w-full rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-5 w-14 rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-18 w-full rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <label className="h-6 w-30 rounded-lg bg-secondary bg-opacity-35 animate-pulse"></label>
          <p className="text-lg font-bold px-4 h-10 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <label className="h-6 w-30 rounded-lg bg-secondary bg-opacity-35 animate-pulse"></label>
          <p className="text-lg font-bold px-4 h-10 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <label className="h-6 w-30 rounded-lg bg-secondary bg-opacity-35 animate-pulse"></label>
          <p className="text-lg font-bold px-4 h-72 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <div className="h-5 w-14 rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-12 w-full rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-5 w-14 rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
          <div className="h-12 w-full rounded-md bg-secondary bg-opacity-35 animate-pulse"></div>
        </div>
      </div>

      <div className="flex my-8 justify-center gap-4">
        <div className="h-12 w-60 bg-secondary bg-opacity-35 animate-pulse"></div>
        <div className="h-12 w-60 bg-secondary bg-opacity-35 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingProductCU;
