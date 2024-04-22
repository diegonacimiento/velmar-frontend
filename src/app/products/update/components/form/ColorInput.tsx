"use client";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import ModalMsg from "./ModalMsg";
import { mainColors } from "@/utils/temporal";
import { ImageProduct } from "@/types/products";

interface ColorInputProps {
  allImages: ImageProduct[];
  removeColor: (color: string) => void;
  handleNewColor: (color: string) => void;
  handleCurrentImage: (color: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({
  allImages,
  removeColor,
  handleNewColor,
  handleCurrentImage,
}) => {
  const [colorDelete, setColorDelete] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [openColors, setOpenColors] = useState<boolean>(false);
  const [colorsImage, setColorsImage] = useState<string[]>(
    allImages.map((image) => image.color)
  );
  const [colorsList, setColorsList] = useState<string[]>(
    mainColors.filter((color) => !colorsImage.includes(color))
  );

  const toggleModal = (color: string) => {
    setColorDelete(color);
    setIsOpenModal((prev) => !prev);
  };

  const handleRemoveColor = (color: string) => {
    removeColor(color);
    const newColorsImage = colorsImage.filter(
      (colorImage) => colorImage !== color
    );
    setColorsImage(newColorsImage);
    setColorsList((prev) => [...prev, color].sort());
    toggleModal("");
  };

  const handleColorSelect = (color: string) => {
    const prevColorsImage = colorsImage;
    prevColorsImage.push(color);
    setColorsImage(prevColorsImage);
    const newColorList = colorsList.filter((element) => element !== color);
    setColorsList(newColorList);
    handleNewColor(color);
    toggleMenuColors();
  };

  const toggleMenuColors = () => {
    setOpenColors((prev) => !prev);
  };

  return (
    <>
      <label className="px-1 text-sm font-light mt-2">Colors:</label>
      <div className="relative flex p-3 bg-primary rounded-lg">
        {isOpenModal ? (
          <ModalMsg
            isOpenModal={isOpenModal}
            toggleModal={toggleModal}
            colorDelete={colorDelete}
            handleRemoveColor={handleRemoveColor}
          />
        ) : (
          <>
            {/* Available colors  */}
            <div
              className={
                openColors ? "flex flex-col gap-2 items-center" : "hidden"
              }
            >
              <button
                type="button"
                className="max-w-20 px-2 rounded-lg border border-secondary hover:bg-body duration-150"
                onClick={toggleMenuColors}
              >
                Close
              </button>
              <div className="flex flex-wrap gap-2 justify-center">
                {colorsList.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`flex justify-center items-center rounded-full w-8 h-8 cursor-pointer hover:opacity-50 duration-150`}
                    onClick={() => handleColorSelect(color)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Image colors */}
            <div className={openColors ? "hidden" : "flex gap-2"}>
              {colorsImage.map((color, index) => (
                <div key={index} className="relative">
                  <div
                    style={{ backgroundColor: color }}
                    className={`flex justify-center items-center rounded-full w-8 h-8 cursor-pointer hover:opacity-70 hover:border-2 hover:border-secondary duration-150`}
                    onClick={() => handleCurrentImage(color)}
                  ></div>
                  <div
                    className="absolute flex justify-center items-center -top-2 -right-1 rounded-full bg-red-600 h-5 w-5 text-primary hover:scale-110 z-10 duration-150"
                    onClick={() => toggleModal(color)}
                  >
                    <MdOutlineClose />
                  </div>
                </div>
              ))}
              <button
                type="button"
                title="Add color"
                className="flex justify-center items-center rounded-full w-8 h-8 bg-gray-400 text-white cursor-pointer hover:opacity-50 duration-150"
                onClick={toggleMenuColors}
              >
                +
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ColorInput;
