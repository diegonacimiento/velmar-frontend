"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

import { IPayload } from "../Form";
import { mainColors } from "@/utils/temporal";
import { formStyles } from "../../styles/FormStyles";
import { MdOutlineClose } from "react-icons/md";
import { setCurrentImage, setField } from "../../utils/validate-form";
import { IProductImage } from "@/types/products";
import { copyData } from "@/utils/functions-share";

interface IColorProps {
  images: IPayload["images"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
  toggleSelector: () => void;
}

const Color: React.FC<IColorProps> = ({
  images,
  setPayload,
  toggleSelector,
}) => {
  const [showColorList, setShowColorList] = useState<boolean>(false);

  const toggleColorList = () => {
    setShowColorList((prev) => !prev);
  };

  const handleSelectedColor = (color: string) => {
    const colorImages: IProductImage | undefined = copyData(
      images.value.find((image) => image.color === color)
    );
    if (colorImages) setCurrentImage(colorImages, setPayload);
  };

  const handleClickColor = (color: string) => {
    if (showColorList) {
      setPayload((prev) => ({
        ...prev,
        images: { ...prev.images, newColor: color },
      }));
      toggleSelector();
    } else {
      handleSelectedColor(color);
    }
  };

  const handleDeleteColor = (color: string) => {
    const newImages = images.value.filter((image) => image.color !== color);
    setField("images", newImages, setPayload);
    if (images.currentImage.color === color) {
      setCurrentImage(newImages[0] || {color: "", urls: [], sizes: []}, setPayload);
    }
  };

  const colorsProduct = images.value.map((image) => image.color);

  const colors = showColorList
    ? mainColors.filter((color) => !colorsProduct.includes(color))
    : colorsProduct;

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Colors</label>

      <div className="flex gap-4 flex-wrap p-4 rounded-md min-h-[4.5rem] bg-primary">
        {showColorList && (
          <button
            type="button"
            title="Close"
            onClick={toggleColorList}
            className="flex items-center justify-center border border-red-600 rounded-full h-10 w-10 hover:scale-105 hover:border-2 duration-150"
          >
            <MdOutlineClose />
          </button>
        )}
        {colors.map((color) => (
          <div key={color} className="relative">
            <div
              style={{ backgroundColor: color }}
              onClick={() => handleClickColor(color)}
              className={
                "rounded-full h-10 w-10 cursor-pointer " +
                (color === images.currentImage.color
                  ? " border-2 border-secondary"
                  : "opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150")
              }
            ></div>
            {!showColorList && (
              <button
                type="button"
                title="Delete size"
                onClick={() => handleDeleteColor(color)}
                className="absolute flex justify-center items-center -top-2 -right-1 rounded-full bg-red-600 h-5 w-5 text-primary text-base hover:scale-110 z-10 duration-150"
              >
                <MdOutlineClose />
              </button>
            )}
          </div>
        ))}

        {images.value.length < 9 && !showColorList && (
          <button
            type="button"
            title="Add color"
            onClick={toggleColorList}
            className="rounded-full h-10 w-10 bg-gray-300 text-white text-xl opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Color;
