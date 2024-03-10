import React from "react";
import { MdAdd, MdDeleteOutline, MdRemove } from "react-icons/md";

const CheckoutPage = () => {
  const cart = [
    {
      product: "T-Shirt",
      amount: 3,
      price: 45,
      subtotal: 3 * 45,
    },
    {
      product: "Pants",
      amount: 2,
      price: 64,
      subtotal: 2 * 64,
    },
    {
      product: "Jacket",
      amount: 1,
      price: 80,
      subtotal: 1 * 80,
    },
    {
      product: "Shoes",
      amount: 2,
      price: 105,
      subtotal: 2 * 105,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-2 sm:p-4 w-full">
      <section className="sm:p-4 sm:basis-4/5 py-4 text-secondary overflow-x-auto">
        <h2 className="text-lg font-semibold text-secondary">Cart</h2>

        <div className="grid grid-cols-checkout place-items-center gap-x-2 gap-y-8 overflow-x-auto text-center">
          <span className="font-medium">Product</span>
          <span className="font-medium">Amount</span>
          <span className="font-medium">Price</span>
          {/* <span>Subtotal</span> */}
          <div className="flex justify-center w-full text-xl opacity-0">
                <button type="button" title="Delete" className="cursor-default">
                  <MdDeleteOutline />
                </button>
              </div>
        </div>
          {cart.map((element, index) => (
            <div className="grid grid-cols-checkout place-items-center gap-x-2 gap-y-8 text-center border-b border-primary my-8 py-4" key={index}>
              <span>{element.product}</span>

              <div className="flex justify-center items-center gap-2 w-full">
                <button
                  type="button"
                  className="bg-secondary text-body rounded-full w-4 h-4"
                >
                  <MdRemove />
                </button>
                <span>{element.amount}</span>
                <button
                  type="button"
                  className="bg-secondary text-body rounded-full w-4 h-4"
                >
                  <MdAdd />
                </button>
              </div>

              <span>${element.price}</span>
              {/* <span>${element.subtotal}</span> */}
              <div className="flex justify-center w-full text-xl">
                <button type="button" title="Delete">
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))}
        
      </section>

      <section className="sm:p-4 py-4">
        <h3 className="text-lg font-semibold text-secondary">
          Total price: $90
        </h3>
        <button
          type="button"
          title="Continue"
          className="p-3 mt-4 text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150"
        >
          Continue
        </button>
      </section>
    </div>
  );
};

export default CheckoutPage;
