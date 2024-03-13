"use client";
import React, { createContext, useState } from "react";
import { Context } from "@/types/context";
import { Product } from "@/types/products";

export const VelmarContext = createContext<Context>({} as Context);

export const VelmarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [addressValue, setAddressValue] = useState<string>("");
  const [cart, setCart] = useState<Product[]>([{
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: ["men's clothing"],
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    brand: "ocn",
    creationAt: "",
    stock: 15,
    updatedAt: "",
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: ["men's clothing"],
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    brand: "ocn",
    creationAt: "",
    stock: 15,
    updatedAt: "",
  },]);

  const updateAddressValue = (value: string) => {
    setAddressValue(value);
  };

  const updateCart = (products: Product[]) => {
    setCart(products);
  };

  return (
    <VelmarContext.Provider
      value={{
        addressValue,
        updateAddressValue,
        cart,
        updateCart,
      }}
    >
      {children}
    </VelmarContext.Provider>
  );
};

export default VelmarContext;
