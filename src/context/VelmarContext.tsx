"use client";
import React, { createContext, useState } from "react";

import { Cart, Context } from "@/types/context";
import { Product } from "@/types/products";

export const VelmarContext = createContext<Context>({} as Context);

export const VelmarContextProvider = ({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: boolean;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(auth);
  const [addressValue, setAddressValue] = useState<string>("");
  const [cart, setCart] = useState<Cart[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const updateAddressValue = (value: string) => {
    setAddressValue(value);
  };

  const updateCart = (product: Product, amount: number) => {
    const indexItem = cart.findIndex((item) => item.product.id === product.id);
    
    if (indexItem !== -1) {
      const temporalCart = cart;
      temporalCart[indexItem].amount += amount;
      setCart([...temporalCart]);
      return;
    }
    const newCart = [...cart, { product, amount }];
    setCart([...newCart]);
  };

  const deleteItemCart = (product: Product) => {
    const indexItem = cart.findIndex((item) => item.product.id === product.id);

    if(indexItem !== -1) {
      const temporalCart = cart.filter((item) => item.product.id !== product.id);
      setCart([...temporalCart]);
    }
  }

  const deleteAllCart = () => {
    setCart([]);
  }

  const updateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
  };

  return (
    <VelmarContext.Provider
      value={{
        isAuth,
        setIsAuth,
        addressValue,
        updateAddressValue,
        cart,
        updateCart,
        products,
        updateProducts,
        deleteItemCart,
        deleteAllCart,
      }}
    >
      {children}
    </VelmarContext.Provider>
  );
};

export default VelmarContext;
