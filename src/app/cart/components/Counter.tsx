import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface CounterProps {
  quantity: number;
  handleRemove: () => void;
  handleAdd: () => void;
}

const Counter: React.FC<CounterProps> = ({
  quantity,
  handleRemove,
  handleAdd,
}) => {
  return (
    <div className="flex items-center gap-2 w-1/2">
      <button
        type="button"
        title="Remove a product"
        onClick={handleRemove}
        className="bg-secondary text-body rounded-full text-base w-4 h-4 hover:bg-primary hover:scale-125 duration-150"
      >
        <MdRemove />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        title="Add a product"
        onClick={handleAdd}
        className="bg-secondary text-body rounded-full text-base w-4 h-4 hover:bg-primary hover:scale-125 duration-150"
      >
        <MdAdd />
      </button>
    </div>
  );
};

export default Counter;
