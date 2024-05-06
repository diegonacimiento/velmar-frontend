import React from "react";

import { IPayload } from "../Form";
import { IProductImage } from "@/types/products";

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
  return (
    <div className="flex gap-2 p-2 rounded-md bg-primary">

      {images.value.map((image) => (
        <div
          style={{ backgroundColor: image.color }}
          key={image.color}
          onClick={() => handleSelectedColor(image.color)}
          className={
            "rounded-full h-8 w-8 cursor-pointer " +
            (image.color === currentImage.color
              ? " border-2 border-secondary"
              : "opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150")
          }
        ></div>
      ))}

      {images.value.length < 9 && (
        <button
          type="button"
          title="Add color"
          className="rounded-full h-8 w-8 bg-gray-300 text-white text-xl opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150"
        >
          +
        </button>
      )}
    </div>
  );
};

export default Color;
