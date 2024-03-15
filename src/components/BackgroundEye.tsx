import React from "react";
import { FaEye } from "react-icons/fa";

const BackgroundEye = () => {
  return (
    <div className="flex absolute z-10 bg-black opacity-0 h-full w-full rounded-xl hover:opacity-30 duration-150">
      <button
        className="p-4 m-auto text-4xl text-white"
        type="button"
        title="See product"
      >
        <FaEye />
      </button>
    </div>
  );
};

export default BackgroundEye;
