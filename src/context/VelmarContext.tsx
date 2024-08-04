"use client";
import React, { createContext, useEffect, useState } from "react";

import { IContext, TRole } from "@/types/context";
import { IProduct, IProductImage, Size } from "@/types/products";
import { ICartItem } from "@/types/cart.types";
import { CART_STORAGE_NAME } from "@/utils/constants";

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
  const [addressValue, setAddressValue] = useState<any>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [roleUser, setRoleUser] = useState<TRole>(role);
  const [cart, setCart] = useState<ICartItem[]>();

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem(CART_STORAGE_NAME) || "[]"));
  }, []);

  const addProductToCart = (
    product: IProduct,
    quantity: number,
    size: Size,
    color: IProductImage["color"]
  ) => {
    const cartStorage: ICartItem[] = JSON.parse(
      window.localStorage.getItem(CART_STORAGE_NAME) || "[]"
    );

    const index = cartStorage.findIndex(
      (e) => e.id === product.id && e.size === size && e.color === color
    );

    if (index !== -1) {
      cartStorage[index].quantity += quantity;
    } else {
      const { id, name, price, images, brand } = product;

      cartStorage.push({
        id,
        name,
        price,
        images,
        brand,
        quantity,
        size,
        color,
      });
    }

    window.localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(cartStorage));
    setCart(cartStorage);
  };

  const deleteAllCart = () => {
    window.localStorage.setItem(CART_STORAGE_NAME, JSON.stringify([]));
    setCart([]);
  };

  const updateAddressValue = (value: any) => {
    setAddressValue(value);
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
        products,
        updateProducts,
        roleUser,
        setRoleUser,
        cart,
        setCart,
        addProductToCart,
        deleteAllCart,
      }}
    >
      {children}
    </VelmarContext.Provider>
  );
};

export default VelmarContext;
