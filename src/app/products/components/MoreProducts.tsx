"use client";

import React, { useState } from "react";

import { LIMIT } from "@/utils/constants";

interface IMoreProductsProps {
 moreProducts: (offset: number) => void;
}

const MoreProducts: React.FC<IMoreProductsProps> = ({moreProducts}) => {
 const [offset, setOffset] = useState<number>(0);

 const handleMoreProducts = () => {
  moreProducts(offset + LIMIT);
  setOffset((prev) => prev + LIMIT);
 }

  return (
    <button
      type="button"
      title="More products"
      onClick={handleMoreProducts}
      className="p-4 m-4 self-center w-max text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150"
    >
      More products
    </button>
  );
};

export default MoreProducts;
