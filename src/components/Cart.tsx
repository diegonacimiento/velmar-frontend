"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import useVelmarContext from "@/hooks/useVelmarContext";

const Cart = () => {
  const { cart } = useVelmarContext();

  const path = usePathname();
  return (
    <Link href="/cart" className="relative group">
      <button
        className={
          `relative flex items-center text-xl p-4 rd:pr-0 group-hover:text-secondary duration-150 ` +
          (path.includes("/cart") ? "text-secondary" : "")
        }
        type="button"
      >
        <MdOutlineShoppingCart />
      </button>
      {cart.length > 0 && (
        <div
          className={
            "absolute top-1 left-0.5 flex items-center justify-center rounded-full h-4 w-4 text-xxs text-primary group-hover:bg-secondary duration-150 " +
            (path.includes("/cart") ? "bg-secondary" : "bg-letter")
          }
        >
          {cart.length}
        </div>
      )}
    </Link>
  );
};

export default Cart;
