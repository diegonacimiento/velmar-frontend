import React from "react";

const LoadingBrands = ({ length }: { length?: number }) => {
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
                  "relative w-full duration-150 h-40 bg-secondary bg-opacity-35 animate-pulse "
                }
              ></figure>
              <div className="flex gap-6 justify-between p-2 w-full">
                <h1
                  className={
                    "h-7 w-12 rounded-xl bg-secondary bg-opacity-35 animate-pulse"
                  }
                ></h1>
                <p className="h-7 w-40 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingBrands;
