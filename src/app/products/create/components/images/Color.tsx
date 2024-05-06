"use client";
import React, { useState } from "react";

import { IPayload } from "../Form";
import { IProductImage } from "@/types/products";
import { mainColors } from "@/utils/temporal";
import { formStyles } from "../../styles/FormStyles";
import { MdOutlineClose } from "react-icons/md";

interface IColorProps {
  images: IPayload["images"];
  currentImage: IProductImage;
  handleSelectedColor: (color: string) => void;
}

const Color: React.FC<IColorProps> = ({
  images,
  currentImage,
  handleSelectedColor,
}) => {
  const [showColorList, setShowColorList] = useState<boolean>(false);

  const toggleColorList = () => {
    setShowColorList((prev) => !prev);
  };

  const colorsProduct = images.value.map((image) => image.color);

  const colors = showColorList
    ? mainColors.filter((color) => !colorsProduct.includes(color))
    : colorsProduct;

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Colors</label>

      <div className="flex gap-4 flex-wrap p-4 rounded-md bg-primary">
        {showColorList && (
          <button
            type="button"
            title="Close"
            onClick={toggleColorList}
            className="flex items-center justify-center border border-red-600 h-8 w-8 rounded-full hover:scale-105 duration-150"
          >
            <MdOutlineClose />
          </button>
        )}
        {colors.map((color) => (
          <div
            style={{ backgroundColor: color }}
            key={color}
            onClick={() => handleSelectedColor(color)}
            className={
              "rounded-full h-8 w-8 cursor-pointer " +
              (color === currentImage.color
                ? " border-2 border-secondary"
                : "opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150")
            }
          ></div>
        ))}

        {images.value.length < 9 && !showColorList && (
          <button
            type="button"
            title="Add color"
            onClick={toggleColorList}
            className="rounded-full h-8 w-8 bg-gray-300 text-white text-xl opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Color;
