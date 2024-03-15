"use client";
import React from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import { Product } from "@/types/products";
import useVelmarContext from "@/hooks/useVelmarContext";
import Counter from "./Counter";

interface CartItemProps {
  product: Product;
  amount: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, amount }) => {
  const { updateCart, deleteItemCart } = useVelmarContext();

  const handleRemove = () => {
   if(amount > 1) {
    updateCart(product, - 1);
   }
  };

  const handleAdd = () => {
    updateCart(product, + 1);
  };

  const handleDeleteProduct = () => {
   deleteItemCart(product);
  }

  return (
      <div
        key={product.id}
        className="relative grid grid-cols-[1fr_2fr] gap-3 sm:gap-6 border-b border-primary p-2 py-8 sm:p-6"
      >
        <figure className="h-32 w-20 sm:h-52 sm:w-52 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            height={80}
            width={80}
            className="h-full w-full object-contain"
          />
        </figure>
        <div className="flex flex-col gap-y-4 justify-around w-fit">
          <span className="text-sm sm:text-base font-bold text-justify w-fit line-clamp-1">
            {product.title}
          </span>

          <Counter
            amount={amount}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />

          <span className="text-sm font-bold">${product.price}</span>

          <button
            type="button"
            className="absolute top-0 right-0 p-0.5 m-2 w-max rounded-full md:text-lg hover:bg-primary hover:scale-125 duration-150"
            title="Delete the product"
            onClick={handleDeleteProduct}
          >
            <RxCross2 />
          </button>
        </div>
      </div>
  );
};

export default CartItem;
