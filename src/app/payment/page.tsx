"use client";
import React from "react";
import { useRouter } from "next/navigation";

import useVelmarContext from "@/hooks/useVelmarContext";

const PaymentPage = () => {
  const router = useRouter();

  const { cart } = useVelmarContext();

  const handlePay = () => {
    // Actualizar cart
    router.push("/success");
  };

  // Creamos una función que sume el total a pagar:
  const handleTotal = () => {
    const reducer = (accumulator: any, currentValue: any) =>
      accumulator + currentValue.price;
    const total = cart.reduce(reducer, 0);
    return total;
  };

  return (
    <div className="w-full p-4">
      <div className="bg-primary p-4 text-secondary rounded-lg">
        <h3 className="text-xl font-semibold">Order summary:</h3>
        {cart.map((item) => (
          <div className="border-b border-secondary m-4" key={item.id}>
            <div className="flex flex-col">
              <h4 className="font-light my-4">{item.title}</h4>
              <span className="mb-4">x {3}</span>
              <span className="">${item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <>
            <br />
            <div className="Payment-element">
              <h3 className="text-xl font-semibold">Total to pay:</h3>
              <h4 className="text-xl font-semibold">${handleTotal()}</h4>
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
