"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TfiShoppingCart } from "react-icons/tfi";

import { totalPrice } from "@/utils/functions-share";
import CartItem from "./components/CartItem";
import { getCart } from "@/services/carts.service";
import { ICart } from "@/types/cart.types";
import useVelmarContext from "@/hooks/useVelmarContext";
import CartLoading from "./components/CartLoading";

const CartPage = () => {
  const router = useRouter();

  const { roleUser } = useVelmarContext();

  const [cart, setCart] = useState<ICart>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const get = async () => {
      const response = await getCart();

      setCart(response);

      setLoading(false);
      // if (!window.localStorage.getItem("cart-velmar")) {
      //   window.localStorage.setItem("cart-velmar", JSON.stringify(response));
      // }
    };
    get();
    return () => {
      console.log("El componente se esta por desmontar");
    };
  }, [cart]);

  const handleGoShop = () => {
    router.push("/products");
  };

  if (loading) {
    return <CartLoading />;
  }

  return (
    <div className="p-2 m-2 sm:p-4 sm:m-8 w-full text-secondary">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart?.items ? (
        <div className="md:flex">
          <section className="md:w-4/5">
            {cart?.items?.map(({ product, quantity, size }) => (
              <CartItem
                product={product}
                amount={quantity}
                size={size}
                key={product.id + size}
              />
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
