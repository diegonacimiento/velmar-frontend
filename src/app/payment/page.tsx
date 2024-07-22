"use client";
import React from "react";
import { useRouter } from "next/navigation";

import useVelmarContext from "@/hooks/useVelmarContext";
import { totalPrice } from "@/utils/functions-share";
import { IoMdArrowRoundBack } from "react-icons/io";

const PaymentPage = () => {
  const router = useRouter();

  const { cart, deleteAllCart } = useVelmarContext();

  const handleBack = () => {
    router.back();
  };

  const handlePay = () => {
    router.push("/success");
    deleteAllCart();
  };

  return (
    <div className="w-full max-w-650 p-4">
      <button
        type="button"
        title="Back"
        onClick={handleBack}
        className="flex justify-center items-center gap-1 mt-12 mb-6 w-max rounded-md text-secondary hover:scale-105 duration-150"
      >
        <IoMdArrowRoundBack />
        Back
      </button>
      <div className="bg-primary px-6 sm:px-12 py-12 text-secondary rounded-lg mb-12">
        <h3 className="text-xl font-semibold">Order summary:</h3>
        {cart?.map(({ id, name, price, quantity, size }) => (
          <div className="border-b border-secondary m-4" key={id + size}>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg my-4">{name}</h4>
              <span className="mb-4">Size: {size}</span>
              <span className="mb-4">x {quantity}</span>
              <span className="font-semibold">${price}</span>
            </div>
          </div>
        ))}
        {cart && cart.length > 0 && (
          <>
            <br />
            <div className="Payment-element">
              <h3 className="text-xl font-semibold">Total to pay:</h3>
              <h4 className="text-xl font-semibold">${totalPrice(cart)}</h4>
            </div>
            <br />
            <button
              type="button"
              title="Pay"
              className="p-3 mt-4 w-40 text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
              onClick={handlePay}
            >
              Pay
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
