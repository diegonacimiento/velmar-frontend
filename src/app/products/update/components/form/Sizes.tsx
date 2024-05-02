"use client";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import { Size, SizesTools } from "@/types/products";
import { allSizes } from "@/utils/temporal";

interface SizesProps {
  sizes: SizesTools;
}

const Sizes: React.FC<SizesProps> = ({
  sizes: { sizes, addSize, removeSize },
}) => {
  const [openSizes, setOpenSizes] = useState<boolean>(false);

  const toggleMenuSizes = () => {
    setOpenSizes((prev) => !prev);
  };

  const handleAddSize = (size: Size) => {
    addSize(size);
    toggleMenuSizes();
  };

  const sizesAvailable = allSizes.filter(
    (sizeItem) => !sizes?.includes(sizeItem)
  );

  return (
    <div className="flex flex-col gap-1 mt-1 mb-2">
      <label className="px-1 text-sm font-light">Sizes</label>
      <div className="p-3 rounded-lg bg-primary">
        {/* Sizes list */}
        <div
          className={openSizes ? "flex flex-col gap-2 items-center" : "hidden"}
        >
          <button
            type="button"
            className="max-w-20 px-2 rounded-lg border border-secondary hover:bg-body duration-150"
            onClick={toggleMenuSizes}
          >
            Close
          </button>
          <div className="flex flex-wrap gap-2 justify-center">
            {sizesAvailable?.map((size, index) => (
              <button
                type="button"
                title={size}
                key={size}
                className={`flex justify-center items-center border border-secondary rounded-full h-8 w-8 text-xs hover:bg-body`}
                onClick={() => handleAddSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Sizes image */}
        <div className={openSizes ? "hidden" : "relative flex gap-2"}>
          {sizes?.map((size, index) => (
            <div className="relative" key={size}>
              <button
                type="button"
                className="relative flex justify-center items-center border border-secondary rounded-full h-8 w-8 text-xs hover:bg-body duration-150"
              >
                {" "}
                {size}{" "}
              </button>
              {sizes.length > 1 && (
                <button
                  type="button"
                  className="absolute flex justify-center items-center -top-2 -right-1 rounded-full bg-red-600 h-5 w-5 text-primary text-base hover:scale-110 z-10 duration-150"
                  onClick={() => removeSize(size)}
                >
                  <MdOutlineClose />
                </button>
              )}
            </div>
          ))}
          {sizesAvailable.length > 0 && (
            <button
              type="button"
              className="flex justify-center items-center rounded-full h-8 w-8 bg-gray-400 text-white hover:opacity-50"
              title="Add size"
              onClick={toggleMenuSizes}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sizes;
