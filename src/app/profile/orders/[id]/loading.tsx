import React from "react";

const loading = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 justify-evenly border border-secondary p-4 rounded-md min-w-64 min-h-[26rem]">
        <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
        <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
        <div className="rounded-md w-full h-56 bg-secondary bg-opacity-30 animate-pulse"></div>
        <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default loading;
