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
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const updateAddressValue = (value: string) => {
    setAddressValue(value);
  };

  const updateCart = (products: Product[]) => {
    setCart(products);
  };

  const updateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
  };

  return (
    <VelmarContext.Provider
      value={{
        addressValue,
        updateAddressValue,
        cart,
        updateCart,
        products,
        updateProducts,
      }}
    >
      {children}
    </VelmarContext.Provider>
  );
};

export default VelmarContext;
