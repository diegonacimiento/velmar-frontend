import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <div className="rounded-md h-6 w-52 bg-opacity-30 bg-secondary animate-pulse"></div>
      <div className="flex flex-col gap-2 my-4">
        <div className="rounded-md h-5 w-30 bg-opacity-30 bg-secondary animate-pulse"></div>
        <div className="rounded-md h-10 w-full bg-opacity-30 bg-secondary animate-pulse"></div>
        <div className="h-6 w-full"></div>
        <div className="rounded-md h-5 w-30 bg-opacity-30 bg-secondary animate-pulse"></div>
        <div className="rounded-md h-10 w-full bg-opacity-30 bg-secondary animate-pulse"></div>
        <div className="h-6 w-full"></div>
        <div className="rounded-md h-12 w-full bg-opacity-30 bg-secondary animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
