"use client";
import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineClose } from "react-icons/md";

import { IPayload } from "../Form";
import { formStyles } from "../../styles/FormStyles";
import { setImage } from "../../utils/validate-form";
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
  const handleSelectedColor = (color: string) => {
    const colorImages: IProductImage | undefined = copyData(
      images.value.find((image) => image.color === color)
    );
    if (colorImages) setImage(setPayload, colorImages);
  };

  const handleDeleteColor = (color: string) => {
    const newImages = images.value.filter((image) => image.color !== color);
    if (images.currentImage.color === color) {
      setImage(
        setPayload,
        newImages[0] || { color: "", urls: [], sizes: [] },
        newImages,
      );
    }
  };

  const handleAddColor = () => {
    setPayload((prev) => ({
      ...prev,
      images: { ...prev.images, newColor: true },
    }));
    toggleSelector();
  };

  const colors = images.value.map((image) => image.color);

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Colors</label>

      <div className="flex gap-4 flex-wrap p-4 rounded-md min-h-[4.5rem] bg-primary">
        {colors.map((color) => (
          <div key={color} className="relative">
            <div
              style={{ backgroundColor: color }}
              onClick={() => handleSelectedColor(color)}
              className={
                "rounded-full h-10 w-10 cursor-pointer " +
                (color === images.currentImage.color
                  ? " border-2 border-secondary"
                  : "opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150")
              }
            ></div>

            <button
              type="button"
              title="Delete size"
              onClick={() => handleDeleteColor(color)}
              className="absolute flex justify-center items-center -top-2 -right-1 rounded-full bg-red-600 h-5 w-5 text-primary text-base hover:scale-110 z-10 duration-150"
            >
              <MdOutlineClose />
            </button>
          </div>
        ))}

        {images.value.length < 9 && (
          <button
            type="button"
            title="Add color"
            onClick={handleAddColor}
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
