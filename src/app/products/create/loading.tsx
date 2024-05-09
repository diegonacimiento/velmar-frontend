import React from "react";

const loading = () => {
  return (
    <div className="h-full w-full p-4 max-w-6xl">
      <div className="flex flex-col overflow-hidden sm:flex-row min-h-600p w-full gap-12 sm:px-4 py-8 m-auto">
        <figure className="relative w-full duration-150 h-[25rem] sm:h-[34.375rem] bg-secondary bg-opacity-35 animate-pulse"></figure>

        <div className="flex flex-col gap-6 px-4 w-full">
          <label className="h-6 w-30 rounded-lg bg-secondary bg-opacity-35 animate-pulse"></label>
          <p className="text-lg font-bold px-4 h-10 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <label className="h-6 w-30 rounded-lg bg-secondary bg-opacity-35 animate-pulse"></label>
          <p className="text-lg font-bold px-4 h-10 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <label className="h-6 w-30 rounded-lg bg-secondary bg-opacity-35 animate-pulse"></label>
          <p className="text-lg font-bold px-4 h-72 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>

          <div className="text-lg font-bold h-12 w-full rounded-xl bg-secondary bg-opacity-35 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
