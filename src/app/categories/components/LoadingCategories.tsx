import React from "react";

const LoadingCategories = ({ length }: { length?: number }) => {
  return (
    <div className="flex justify-center gap-7 p-2 sm:p-4 w-full flex-wrap">
      <h1 className="my-4 h-8 w-40 rounded-md bg-secondary bg-opacity-35 animate-pulse"></h1>

      <div className="flex justify-center gap-7 p-2 sm:p-4 w-full flex-wrap">
        {[...new Array<number>(length || 8)].map((e, index) => {
          return (
            <div
              key={index}
              className={
                "flex flex-col gap-4 overflow-hidden pb-4 rounded-xl shadow-md max-w-88 w-full "
              }
            >
              <figure
                className={
                  "relative w-full duration-150 h-96 bg-secondary bg-opacity-35 animate-pulse "
                }
              ></figure>
              <div className="p-2">
                <h2 className="rounded-md h-8 w-full bg-secondary bg-opacity-35 animate-pulse"></h2>
              </div>
              <div className="flex gap-6 justify-between p-2 w-full">
                <h2
                  className={
                    "h-7 w-12 rounded-xl bg-secondary bg-opacity-35 animate-pulse"
                  }
                ></h2>
                <p className="h-7 w-40 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingCategories;
