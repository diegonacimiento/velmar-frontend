"use client";
import React, { createContext, useState } from "react";

import { ICart, IContext, TRole } from "@/types/context";
import { IProduct } from "@/types/products";

export const VelmarContext = createContext<IContext>({} as IContext);

export const VelmarContextProvider = ({
  children,
  auth,
  role,
}: {
  children: React.ReactNode;
  auth: boolean;
  role: TRole;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(auth);
  const [addressValue, setAddressValue] = useState<string>("");
  const [cart, setCart] = useState<ICart[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [roleUser, setRoleUser] = useState<TRole>(role);

  const updateAddressValue = (value: string) => {
    setAddressValue(value);
  };

  const updateCart = (product: IProduct, amount: number) => {
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

  const deleteItemCart = (product: IProduct) => {
    const indexItem = cart.findIndex((item) => item.product.id === product.id);

    if (indexItem !== -1) {
      const temporalCart = cart.filter(
        (item) => item.product.id !== product.id
      );
      setCart([...temporalCart]);
    }
  };

  const deleteAllCart = () => {
    setCart([]);
  };

  const updateProducts = (newProducts: IProduct[]) => {
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
        roleUser,
        setRoleUser,
      }}
    >
      {children}
    </VelmarContext.Provider>
  );
};

export default VelmarContext;
