"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

import { Product } from "@/types/products";
import Loading from "./Loading";
import useVelmarContext from "@/hooks/useVelmarContext";
import { MdAdd, MdRemove } from "react-icons/md";

const ProductCard = ({
  product,
  isAll,
}: {
  product: Product;
  isAll?: boolean;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(1);

  const { cart, updateCart } = useVelmarContext();

  const handleAdd = () => {
    setAmount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setAmount((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleLoading = () => {
    setLoading(false);
  };

  const divStyles =
    "flex flex-col overflow-hidden" +
    (isAll
      ? " flex-col gap-4 pb-4 rounded-xl shadow-md"
      : " sm:flex-row gap-12 px-4 py-8 m-auto max-w-6xl");

  const handleAddToCart = () => {
    const newCart = [...cart, product];
    updateCart(newCart);
  };

  return (
    <div className="relative">
      {isAll && (
        <div className="flex absolute z-10 bg-black opacity-0 h-full w-full rounded-xl hover:opacity-30 duration-150">
          <button
            className="p-4 m-auto text-4xl text-white"
            type="button"
            title="See product"
          >
            <FaEye />
          </button>
        </div>
      )}
      <div className={divStyles}>
        
        <figure
          className={
            "relative w-full duration-150 " +
            (loading ? "bg-transparent" : "bg-white py-3") +
            (isAll ? " h-80" : " h-full")
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

        <div className="flex flex-col gap-6 w-full">
          <h1
            className={
              "text-lg font-bold px-4 " + (isAll && "line-clamp-2 h-14")
            }
          >
            {product.title}
          </h1>
          <p className="text-lg font-semibold px-4 w-30 ">$ {product.price}</p>

          {!isAll && (
            <>
              <div className="flex items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-2 w-1/2 text-lg">
                  <button
                    type="button"
                    className="bg-secondary text-body rounded-full text-xl w-5 h-5 hover:bg-primary hover:scale-125 duration-150"
                    title="Remove a product"
                    onClick={handleRemove}
                  >
                    <MdRemove />
                  </button>
                  <span className="text-lg">{amount}</span>
                  <button
                    type="button"
                    className="bg-secondary text-body rounded-full text-xl w-5 h-5 hover:bg-primary hover:scale-125 duration-150"
                    title="Add a product"
                    onClick={handleAdd}
                  >
                    <MdAdd />
                  </button>
                </div>

                <button
                  className="border-2 border-secondary p-2 bg-secondary rounded-3xl text-lg font-semibold hover:scale-105 hover:bg-primary duration-150 w-full max-w-40"
                  type="button"
                  title="See product"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
              <hr />
              <h3 className="text-lg font-medium">Description:</h3>
              <p className={"text-justify px-4"}>{product.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
