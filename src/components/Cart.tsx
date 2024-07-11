"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";

import useVelmarContext from "@/hooks/useVelmarContext";
import { ICartItem } from "@/types/cart.types";

const Cart = () => {
  const { cart, isAuth } = useVelmarContext();
  const [cartLength, setCartLength] = useState<number>(0);

  useEffect(() => {
    const reducer = (accumulator: number, currentValue: ICartItem) =>
      accumulator + currentValue.quantity;
    const total = cart.items?.reduce(reducer, 0);
    setCartLength(total);
  }, [cart]);

  const path = usePathname();

  if (!isAuth) return <div className="w-[3.25rem]"></div>;

  return (
    <Link href="/cart" className="relative group">
      <button
        className={
          `relative flex items-center text-xl p-4 rd:pr-0 group-hover:text-secondary duration-150 ` +
          (path.includes("/cart") ? "text-secondary" : "")
        }
        type="button"
        title="Cart"
      >
        <MdOutlineShoppingCart />
      </button>
      {cart.items?.length > 0 && (
        <div
          className={
            "absolute top-1 left-0.5 flex items-center justify-center rounded-full h-4 w-4 text-xxs text-primary group-hover:bg-secondary duration-150 " +
            (path.includes("/cart") ? "bg-secondary" : "bg-letter")
          }
        >
          {cartLength}
        </div>
      )}
    </Link>
  );
};

export default Cart;
