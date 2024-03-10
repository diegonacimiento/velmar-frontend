import React from "react";
import axios from "axios";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { MdAdd, MdRemove } from "react-icons/md";

import { Product } from "@/types/products";
import Link from "next/link";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const CartPage = async () => {
  const products = await getProducts();

  const cart = [];

  for (let index = 0; index < 5; index++) {
    cart.push(products[index]);
  }

  return (
    <div className="m-4 sm:m-8 text-secondary">
      <h2 className="text-xl font-bold">Cart</h2>
      <div className="md:flex">
        <section className="md:w-4/5">
          {cart.map((product) => (
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
                <div className="flex items-center gap-2 w-full">
                  <button
                    type="button"
                    className="bg-secondary text-body rounded-full w-4 h-4 hover:bg-primary hover:scale-125 duration-150"
                    title="Remove a product"
                  >
                    <MdRemove />
                  </button>
                  <span>{3}</span>
                  <button
                    type="button"
                    className="bg-secondary text-body rounded-full w-4 h-4 hover:bg-primary hover:scale-125 duration-150"
                    title="Add a product"
                  >
                    <MdAdd />
                  </button>
                </div>
                <span className="text-sm">${product.price}</span>
                <span className="font-semibold">
                  Subtotal: ${product.price * 3}
                </span>
                <button
                  type="button"
                  className="absolute top-0 right-0 p-0.5 m-2 w-max rounded-full md:text-lg hover:bg-primary hover:scale-125 duration-150"
                  title="Delete the product"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))}
        </section>
        <section className="md:p-4 py-4 md:w-1/5 my-4 md:my-0">
          <h3 className="text-lg font-semibold text-secondary">Total: $90</h3>
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
    </div>
  );
};

export default CartPage;
