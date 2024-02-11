import React from "react";
import Image from "next/image";
import { Product } from "@/types/products";

const Collection = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="inline-block w-full h-56">
        <Image
          className="w-full h-full object-contain"
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
        />
      </span>
      <h1 className="h-10 text-sm font-bold text-center line-clamp-2">
        {product.title}
      </h1>
      <p className="text-xs font-semibold">$ {product.price}</p>
      <button
        className="border-2 border-secondary p-2 bg-secondary rounded-3xl text-sm font-semibold hover:scale-105 hover:bg-primary duration-150 mt-auto"
        type="button"
        title="See product"
      >
        See product
      </button>
    </div>
  );
};

export default Collection;
