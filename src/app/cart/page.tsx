"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { MdAdd, MdRemove } from "react-icons/md";

import Link from "next/link";
import useVelmarContext from "@/hooks/useVelmarContext";
import { totalPrice } from "@/utils/functions-share";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cart } = useVelmarContext();

  return (
    <div className="m-4 sm:m-8 text-secondary">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart.length > 0 ? (
        <div className="md:flex">
          
          <section className="md:w-4/5">
            {cart.map(({ product, amount }) => (
              <CartItem product={product} amount={amount} key={product.id} />
            ))}
          </section>

          <section className="md:p-4 py-4 md:w-1/5 my-4 md:my-0">
            <h3 className="w-[9.375rem] text-lg font-semibold text-secondary">
              Total: ${totalPrice(cart)}
            </h3>
            <Link href="/information">
              <button
                type="button"
                title="Continue"
                className="p-3 mt-4 w-full text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150"
              >
                Continue
              </button>
            </Link>
          </section>
        </div>
      ) : (
        <div className="my-4">
          {" "}
          <h3>Your cart is empty...</h3>{" "}
        </div>
      )}
    </div>
  );
};

export default CartPage;
