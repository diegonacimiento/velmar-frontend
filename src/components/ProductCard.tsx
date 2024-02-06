import React from "react";
import Image from "next/image";

import { Product } from "@/types/products";

const ProductCard = ({
  product,
  isAll,
}: {
  product: Product;
  isAll?: boolean;
}) => {
  const divStyles =
    "flex flex-col items-center gap-8 max-w-96" +
    (isAll
      ? " p-4 border-x border-y border-secondary rounded-xl shadow-sm h-600p"
      : " px-4 py-8 m-auto");

  return (
    <div className={divStyles}>
      <span className="w-52 h-52">
        <Image
          className="w-full h-full object-contain"
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
        />
      </span>
      <h1
        className={"text-lg font-bold text-center " + (isAll && "line-clamp-2 h-14")}
      >
        {product.title}
      </h1>
      <p className={"text-justify " + (isAll && "line-clamp-3 h-18 break-all")}>
        {product.description}
      </p>
      <p className="text-lg font-semibold ">$ {product.price}</p>
      <button
        className="border-2 border-secondary p-2 bg-secondary rounded-3xl text-lg font-semibold hover:scale-105 hover:bg-primary duration-150 mt-auto"
        type="button"
        title="See product"
      >
        {isAll ? "See product" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
