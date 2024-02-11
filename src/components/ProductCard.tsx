"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

import { Product } from "@/types/products";
import Loading from "./Loading";

const ProductCard = ({
  product,
  isAll,
}: {
  product: Product;
  isAll?: boolean;
}) => {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  const divStyles =
    "flex flex-col gap-4 overflow-hidden" +
    (isAll ? " pb-4 rounded-xl shadow-sm" : " px-4 py-8 m-auto max-w-650");

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
        <span
          className={
            "relative w-full h-80 duration-150 " +
            (loading ? "bg-transparent" : "bg-white py-3")
          }
        >
          {loading && (
            <div className="absolute flex items-center w-full h-full">
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
        </span>
        <h1
          className={"text-lg font-bold px-4 " + (isAll && "line-clamp-2 h-14")}
        >
          {product.title}
        </h1>
        {!isAll && (
          <p
            className={
              "text-justify px-4"
            }
          >
            {product.description}
          </p>
        )}
        <p className="text-lg font-semibold px-4 ">$ {product.price}</p>
        {!isAll && (
          <button
            className="border-2 border-secondary p-2 bg-secondary rounded-3xl text-lg font-semibold hover:scale-105 hover:bg-primary duration-150 mt-auto max-w-40"
            type="button"
            title="See product"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
