"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import Counter from "./Counter";
import { ICartItem } from "@/types/cart.types";
import { copyData } from "@/utils/functions-share";
import { CART_STORAGE_NAME } from "@/utils/constants";

interface CartItemProps {
  item: ICartItem;
  cart: ICartItem[];
  setCart: Dispatch<SetStateAction<ICartItem[] | undefined>>;
}

const CartItem: React.FC<CartItemProps> = ({ item, cart, setCart }) => {
  const { id, name, price, quantity, size, images, brand } = item;

  const handleRemove = () => {
    if (quantity > 1) {
      const index = cart.findIndex(
        (item) => item.id === id && item.size === size
      );
      const copyItems: ICartItem[] = copyData(cart);
      copyItems[index].quantity--;
      setCart(copyItems);
      window.localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(copyItems));
    }
  };

  const handleAdd = () => {
    const index = cart.findIndex(
      (item) => item.id === id && item.size === size
    );
    const copyItems: ICartItem[] = copyData(cart);
    copyItems[index].quantity++;
    setCart(copyItems);
    window.localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(copyItems));
  };

  const handleDeleteProduct = () => {
    const index = cart.findIndex(
      (item) => item.id === id && item.size === size
    );
    const copyItems: ICartItem[] = copyData(cart);
    copyItems.splice(index, 1);
    setCart(copyItems);
    window.localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(copyItems));
  };

  return (
    <div
      key={id}
      className="relative grid grid-cols-[1fr_1.5fr] gap-3 xsm:gap-6 border-b border-primary p-2 py-8 sm:p-6"
    >
      <figure className="min-h-32 min-w-20 w-full sm:h-52">
        <Image
          src={images[0].urls[0]}
          alt={name}
          height={80}
          width={80}
          className="h-full w-full object-contain"
        />
      </figure>
      <div className="flex flex-col gap-y-4 justify-around w-fit">
        <span className="text-sm xsm:text-base font-bold text-justify w-fit line-clamp-1">
          {name}
        </span>

        <span className="text-xs xsm:text-sm font-medium text-justify w-fit line-clamp-1">
          Size: {size}
        </span>

        <Counter
          quantity={quantity}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />

        <span className="text-sm font-bold">${price}</span>

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
