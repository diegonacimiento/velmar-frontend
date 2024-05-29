import React from "react";

const loading = () => {
  return (
    <div className=" grid place-content-center p-4 h-full min-h-screen w-full bg-primary bg-opacity-45 text-secondary">
      <div className="relative flex flex-col gap-4 justify-center items-center h-full w-full">
        <h1 className="text-center text-2xl font-bold antialiased font-mono tracking-widest">
          Velmar
        </h1>
        <div className="flex gap-1">
          <div className="h-5 w-5 bg-secondary bg-opacity-80 animate-bounce [animation-delay:-0.3s] rounded-full"></div>
          <div className="h-5 w-5 bg-secondary bg-opacity-80 animate-bounce [animation-delay:-0.15s] rounded-full"></div>
          <div className="h-5 w-5 bg-secondary bg-opacity-80 animate-bounce rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
