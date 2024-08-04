"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdErrorOutline } from "react-icons/md";

import useVelmarContext from "@/hooks/useVelmarContext";
import { totalPrice } from "@/utils/functions-share";
import { IoMdArrowRoundBack } from "react-icons/io";
import { createOrder } from "@/services/orders.service";
import { ICartItem } from "@/types/cart.types";
import Loading from "@/components/Loading";

const PaymentPage = () => {
  const router = useRouter();

  const { cart, deleteAllCart } = useVelmarContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleBack = () => {
    router.back();
  };

  const prepareCart = (cart: ICartItem[]) => {
    let cartFinal = [];

    for (const item of cart) {
      const { images, ...properties } = item;
      cartFinal.push({ ...properties });
    }

    return cartFinal;
  };

  const handlePay = async () => {
    try {
      if (cart && cart.length > 0) {
        await createOrder({ cart: prepareCart(cart) });
        router.push("/success");
        setLoading(true);
        deleteAllCart();
      }
    } catch (error) {
      console.error(error);
      setError("A problem occurred, please try again or contact support");
    }
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
      <div className="bg-primary px-6 sm:px-12 py-12 text-secondary rounded-lg mb-12 min-h-80">
        {loading ? (
          <div className="grid place-content-center h-80">
            <Loading />
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold">Order summary:</h3>
            {cart?.map(({ id, name, price, quantity, size, color }) => (
              <div
                className="border-b border-secondary m-4"
                key={`${id} ${size} ${color}`}
              >
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg my-4">{name}</h4>
                  <span className="mb-4">Size: {size}</span>
                  <span
                    style={{ backgroundColor: color }}
                    className="mb-4 h-3 w-3 rounded-full"
                  ></span>
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
            <p className="flex items-center gap-1 my-4 min-h-5 text-sm sm:text-base text-red-600">
              {error && (
                <>
                  <MdErrorOutline /> {error}
                </>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
