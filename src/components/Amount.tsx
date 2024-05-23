"use client";
import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface AmountProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Amount: React.FC<AmountProps> = ({ amount, setAmount }) => {
  
  const handleAdd = () => {
    setAmount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setAmount((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className="flex items-center gap-4 w-1/2">
      <button
        type="button"
        className="bg-secondary text-body rounded-md text-2xl  active:bg-primary active:scale-125 duration-150 bt-amount"
        title="Remove a product"
        onClick={handleRemove}
      >
        <MdRemove />
      </button>
      <span className="text-xl">{amount}</span>
      <button
        type="button"
        className="bg-secondary text-body rounded-md text-2xl  active:bg-primary active:scale-125 duration-150 bt-amount"
        title="Add a product"
        onClick={handleAdd}
      >
        <MdAdd />
      </button>
    </div>
  );
};

export default Amount;
