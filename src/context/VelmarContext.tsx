"use client";
import React, { createContext, useEffect, useState } from "react";

import { IContext, TRole } from "@/types/context";
import { ICart } from "@/types/cart.types";
import { IProduct, Size } from "@/types/products";

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
  const [cart, setCart] = useState<ICart>({} as ICart);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [roleUser, setRoleUser] = useState<TRole>(role);

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem("cart-velmar") || "{}"));
  }, []);

  const updateAddressValue = (value: string) => {
    setAddressValue(value);
  };

  const updateCart = (product: IProduct, quantity: number, size: Size) => {
    const indexItem = cart.items.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (cart.items[indexItem]?.size === size) {
      const temporalCartItems = [...cart.items];
      temporalCartItems[indexItem].quantity += quantity;
      setCart((prev) => ({ ...prev, items: [...temporalCartItems] }));
      return;
    }
    const newCart: ICart = { ...cart, items: [{ product, quantity, size }] };
    setCart({ ...newCart });
  };

  const deleteItemCart = (product: IProduct, size: Size) => {
    const indexItem = cart.items.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (indexItem !== -1) {
      const temporalCartItems = [...cart.items];
      temporalCartItems.splice(indexItem, 1);
      setCart((prev) => ({ ...prev, items: [...temporalCartItems] }));
    }
  };

  const deleteAllCart = () => {
    setCart({} as ICart);
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
