import React from "react";

const LoadingProfile = () => {
  return (
    <div className="flex flex-col gap-4 p-12 justify-evenly my-4 rounded-lg h-[47.625rem] max-w-520 w-full bg-primary animate-pulse">
      <div className="self-center rounded-lg my-4 h-10 w-full max-w-80 bg-secondary bg-opacity-40 animate-pulse"></div>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-3 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-3 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-3 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-3 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <label className="rounded-lg h-3 w-full max-w-28 bg-secondary bg-opacity-40 animate-pulse"></label>
          <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
        </div>
      </div>

      <div className="rounded-lg h-10 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
      <div className="rounded-lg h-4 w-full bg-secondary bg-opacity-40 animate-pulse"></div>
    </div>
  );
};

export default LoadingProfile;
