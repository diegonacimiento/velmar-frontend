import React from "react";

const LoadingProducts = ({ length }: { length?: number }) => {
  return (
    <div className="flex justify-center gap-7 p-2 sm:p-4 w-full flex-wrap">
      {[...new Array<number>(length || 12)].map((e, index) => {
        return (
          <div
            key={index}
            className={
              "flex flex-col gap-4 overflow-hidden pb-4 rounded-xl shadow-md max-w-88 w-full "
            }
          >
            <figure
              className={
                "relative w-full duration-150 h-80 bg-secondary bg-opacity-35 animate-pulse "
              }
            ></figure>
            <div className="flex flex-col gap-6 w-full">
              <h1
                className={
                  "mx-4 m-[0.875rem] h-7 rounded-xl bg-secondary bg-opacity-35 animate-pulse"
                }
              ></h1>
              <p className="mx-4 h-7 w-30 rounded-xl bg-secondary bg-opacity-35 animate-pulse"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingProducts;
