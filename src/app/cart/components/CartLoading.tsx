import React from "react";

const CartLoading = () => {
  return (
    <div className="p-2 m-2 sm:p-4 sm:m-8 w-full text-secondary">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="md:flex md:gap-4">
        <section className="flex flex-col gap-4 w-full md:w-4/5">
          {[1, 2, 3, 4].map((e) => (
            <div
              key={e}
              className="grid grid-cols-[1fr_1.5fr] gap-3 xsm:gap-6 rounded-md border-b p-2 py-8 sm:p-6 w-full overflow-hidden"
            >
              <figure className="m-auto min-h-40 min-w-28 max-w-36 max-h-40 w-3/5 sm:h-52 sm:w-3/5 overflow-hidden">
                <div className="h-[1170px] w-[960px] bg-secondary bg-opacity-30 animate-pulse"></div>
              </figure>
              <div className="flex flex-col justify-evenly h-full w-full">
                <div className="rounded-md h-6 w-40 bg-secondary bg-opacity-30 animate-pulse"></div>
                <div className="rounded-md h-6 w-32 bg-secondary bg-opacity-30 animate-pulse"></div>
                <div className="rounded-md h-6 w-32 bg-secondary bg-opacity-30 animate-pulse"></div>
                <div className="rounded-md h-6 w-40 bg-secondary bg-opacity-30 animate-pulse"></div>
              </div>
            </div>
          ))}
        </section>
        <section className="w-full md:w-1/5">
          <div className="my-4 rounded-md h-6 w-40 bg-secondary bg-opacity-30 animate-pulse"></div>
          <div className="my-4 rounded-md h-10 w-40 bg-secondary bg-opacity-30 animate-pulse"></div>
        </section>
      </div>
    </div>
  );
};

export default CartLoading;
