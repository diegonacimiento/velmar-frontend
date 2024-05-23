"use client";
import React from "react";
import { TfiShoppingCart } from "react-icons/tfi";

import Link from "next/link";
import useVelmarContext from "@/hooks/useVelmarContext";
import { totalPrice } from "@/utils/functions-share";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();

  const { cart, roleUser } = useVelmarContext();

  const handleGoShop = () => {
    router.push("/products");
  };

  return (
    <div className="p-4 m-4 sm:m-8 text-secondary">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart.length > 0 ? (
        <div className="md:flex">
          <section className="md:w-4/5">
            {cart.map(({ product, amount, size }) => (
              <CartItem product={product} amount={amount} size={size} key={product.id + size} />
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
        <div className="flex flex-col items-center gap-8 my-4">
          {roleUser === "salesperson" && (
            <h2 className="p-4 rounded-md text-2xl my-4">
              To simulate a purchase, add products to the cart
            </h2>
          )}{" "}
          <span className="text-9xl">
            <TfiShoppingCart />
          </span>
          <h3 className="text-2xl tracking-widest">
            Your cart is currently empty!
          </h3>{" "}
          <button
            type="button"
            title="Go shopping"
            className="p-3 mt-4 rounded-md text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
            onClick={handleGoShop}
          >
            Go shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
