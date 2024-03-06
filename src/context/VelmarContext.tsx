"use client";
import React, { createContext, useState } from "react";
import { Context } from "@/types/context";

export const VelmarContext = createContext<Context>({} as Context);

export const VelmarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [addressValue, setAddressValue] = useState<string>("");

  const updateAddressValue = (value: string) => {
    setAddressValue(value);
  };

  return (
    <VelmarContext.Provider
      value={{
        addressValue,
        updateAddressValue,
      }}
    >
      {children}
    </VelmarContext.Provider>
  );
};

export default VelmarContext;
