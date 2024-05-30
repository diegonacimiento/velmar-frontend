import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col gap-4 p-12 justify-evenly my-12 rounded-lg h-[47.625rem] w-500p bg-primary animate-pulse">
      <div className="self-center rounded-lg my-4 h-10 w-full max-w-80 bg-secondary bg-opacity-40 animate-pulse"></div>

      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-5 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-5 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-5 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-5 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-5 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
      </div>

      <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
      <div className="rounded-lg h-6 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
    </div>
  );
};

export default loading;
