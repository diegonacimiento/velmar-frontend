"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

import { mainColors } from "@/utils/temporal";
import { IProductFields } from "@/types/products";

interface IColorPickerProps {
  imagesValue: IProductFields["images"]["value"];
  selectedColor: { value: string; error: string };
  setSelectedColor: Dispatch<SetStateAction<{ value: string; error: string }>>;
}

const ColorPicker: React.FC<IColorPickerProps> = ({
  imagesValue,
  selectedColor,
  setSelectedColor,
}) => {
  const [colorsInUse, setcolorsInUse] = useState(
    imagesValue
      .filter((image) => image.color !== selectedColor.value)
      .map((image) => image.color)
  );

  const [availableColors, setAvailableColors] = useState(
    mainColors.filter((color) => !colorsInUse.includes(color))
  );

  const handleSelectorColor = (color: string) => {
    setSelectedColor(() => ({ value: color, error: "" }));
  };

  return (
    <>
      <h2 className="text-2xl font-medium text-secondary">Select a color</h2>
      <div
        className={
          "flex gap-4 flex-wrap justify-center p-4 rounded-md min-h-[4.5rem] max-w-650 bg-primary " +
          (selectedColor.error && "border-2 border-red-600")
        }
      >
        {availableColors.map((color) => (
          <div key={color} className="relative">
            <div
              style={{ backgroundColor: color }}
              onClick={() => handleSelectorColor(color)}
              className={
                "rounded-full h-10 w-10 cursor-pointer " +
                (color === selectedColor.value
                  ? " border-2 border-body scale-125"
                  : "opacity-50 hover:opacity-100 hover:border-2 hover:border-body duration-150")
              }
            ></div>{" "}
          </div>
        ))}
      </div>
      {selectedColor.error && (
        <p className={"flex items-center gap-1 text-red-600"}>
          {" "}
          <MdErrorOutline />
          {selectedColor.error}
        </p>
      )}
      <hr className="my-4 w-full" />
    </>
  );
};

export default ColorPicker;
