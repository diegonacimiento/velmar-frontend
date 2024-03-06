"use client"
import { useContext } from "react";

import VelmarContext from "@/context/VelmarContext";
import { Context } from "@/types/context";;

const useVelmarContext = () => {
  const context = useContext(VelmarContext);

  return context;
};

export default useVelmarContext;
