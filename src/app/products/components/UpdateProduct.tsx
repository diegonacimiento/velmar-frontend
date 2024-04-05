"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Product } from "@/types/products";
import useVelmarContext from "@/hooks/useVelmarContext";
import Loading from "../../../components/Loading";
import Amount from "../../../components/Amount";
import BackgroundEye from "../../../components/BackgroundEye";
import { useRouter } from "next/navigation";

const UpdateProduct = ({ product }: { product: Product }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(1);
  const [btIsChecked, setBtIsChecked] = useState<boolean>(false);

  const { updateCart, isAuth, roleUser } = useVelmarContext();

  const router = useRouter();

  const handleLoading = () => {
    setLoading(false);
  };

  const divExtraStyles = "md:flex-row gap-12 sm:px-4 py-8 m-auto max-w-6xl";

  const handleAddToCart = () => {
    if (isAuth) {
      updateCart(product, amount);
      setAmount(1);
      setBtIsChecked(true);
      setTimeout(() => setBtIsChecked(false), 5000);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="relative">
      <div className={"flex flex-col overflow-hidden " + divExtraStyles}>
        <figure
          className={
            "relative w-full duration-150 " +
            (loading ? "bg-transparent" : "bg-white py-3")
          }
        >
          {loading && (
            <div className="absolute flex items-center w-full h-full bg-secondary bg-opacity-35 animate-pulse">
              <Loading />
            </div>
          )}
          <Image
            className={
              "w-full h-full object-contain duration-150 " +
              (loading ? "opacity-0" : "opacity-100")
            }
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            onLoad={handleLoading}
          />
        </figure>

        <div className="flex flex-col gap-6 px-4 w-full">
          <h1 className={"text-lg font-bold " + "line-clamp-2 h-14"}>
            {product.title}
          </h1>
          <p className="text-lg font-semibold w-30 ">$ {product.price}</p>

          <>
            <div className="flex items-center justify-between gap-4">
              <Amount amount={amount} setAmount={setAmount} />

              {btIsChecked ? (
                <span className="flex justify-center items-center h-12 w-40">
                  Product added {"\u2714"}
                </span>
              ) : (
                <button
                  className="border-2 border-secondary p-2 bg-secondary rounded-3xl text-lg font-semibold hover:scale-105 hover:bg-primary duration-150 w-full max-w-40"
                  type="button"
                  title="Add to cart"
                  onClick={handleAddToCart}
                  id="bt-addToCart"
                >
                  {roleUser === "salesperson" ? "Edit product" : "Add to cart"}
                </button>
              )}
            </div>

            <hr />
            <h3 className="text-lg font-medium">Description:</h3>
            <p className={"text-justify px-2"}>{product.description}</p>
          </>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
