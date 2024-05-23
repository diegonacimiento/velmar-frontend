"use client";
import React from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import { IProduct, Size } from "@/types/products";
import useVelmarContext from "@/hooks/useVelmarContext";
import Counter from "./Counter";

interface CartItemProps {
  product: IProduct;
  amount: number;
  size: Size;
}

const CartItem: React.FC<CartItemProps> = ({ product, amount, size }) => {
  const { updateCart, deleteItemCart } = useVelmarContext();

  const handleRemove = () => {
   if(amount > 1) {
    updateCart(product, - 1, size);
   }
  };

  const handleAdd = () => {
    updateCart(product, + 1, size);
  };

  const handleDeleteProduct = () => {
   deleteItemCart(product, size);
  }

  return (
      <div
        key={product.id}
        className="relative grid grid-cols-[1fr_2fr] gap-3 sm:gap-6 border-b border-primary p-2 py-8 sm:p-6"
      >
        <figure className="h-32 w-20 sm:h-52 sm:w-52">
          <Image
            src={product.images[0].urls[0]}
            alt={product.name}
            height={80}
            width={80}
            className="h-full w-full object-contain"
          />
        </figure>
        <div className="flex flex-col gap-y-4 justify-around w-fit">
          <span className="text-sm sm:text-base font-bold text-justify w-fit line-clamp-1">
            {product.name}
          </span>

          <span className="text-xs sm:text-sm font-medium text-justify w-fit line-clamp-1">
            Size: {size}
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
