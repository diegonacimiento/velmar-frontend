"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

import { IPayload } from "../Form";
import { copyData } from "@/utils/functions-share";
import { IProductImage, Size } from "@/types/products";
import { mainColors } from "@/utils/temporal";
import { setImage } from "../../utils/validate-form";
import Gallery from "./Gallery";

interface IImageSelectorProps {
  images: IPayload["images"];
  toggleSelector: () => void;
  setPayload: Dispatch<SetStateAction<IPayload>>;
}

const ImageSelector: React.FC<IImageSelectorProps> = ({
  images,
  toggleSelector,
  setPayload,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImages, setSelectedImages] = useState<string[]>(
    images.newColor ? [] : [...images.currentImage.urls]
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    images.newColor ? "" : images.currentImage.color
  );

  const [errorImages, setErrorImages] = useState<string>("");
  const [errorColor, setErrorColor] = useState<string>("");

  const incompleteSteps = () => {
    if (selectedImages.length === 0) {
      setErrorImages("You must select at least one image");
      return true;
    }

    if (!selectedColor) {
      setErrorColor("Select a color");
      window.scrollTo(0, 0);
      return true;
    }

    return false;
  };

  const addImages = () => {
    if (incompleteSteps()) return;

    const newImage: IProductImage = {
      color: selectedColor,
      urls: [...selectedImages],
      sizes: [Size.XS],
    };

    setImage(setPayload, newImage, [...images.value, newImage]);
  };

  const updateImage = () => {
    if (incompleteSteps()) return;

    const color = images.currentImage.color;

    const index = images.value.findIndex((image) => image.color === color);

    const copy: IProductImage[] = copyData(images.value);

    copy[index].color = selectedColor;
    copy[index].urls = [...selectedImages];

    setImage(setPayload, copy[index], copy);
  };

  const handleSubmit = () => {
    if (incompleteSteps()) return;

    if (images.newColor || images.value.length === 0) {
      addImages();
    } else {
      updateImage();
    }
    toggleSelector();
  };

  const handleSelectedImages = (url: string) => {
    setErrorImages("");
    if (selectedImages.includes(url)) {
      const newSelectedImages = selectedImages.filter((image) => image !== url);
      setSelectedImages([...newSelectedImages]);
      return;
    }

    setSelectedImages((prev) => [...prev, url]);
  };

  const handleClickColor = (color: string) => {
    setErrorColor("");
    setSelectedColor(color);
  };

  const handleCancel = () => {
    setPayload((prev) => ({
      ...prev,
      images: { ...prev.images, newColor: false },
    }));
    toggleSelector();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full">
      <>
        <h2 className="text-2xl font-medium text-secondary">Select a color</h2>
        <div
          className={
            "flex gap-4 flex-wrap justify-center p-4 rounded-md min-h-[4.5rem] max-w-650 bg-primary " +
            (errorColor && "border-2 border-red-600")
          }
        >
          {mainColors.map((color) => (
            <div key={color} className="relative">
              <div
                style={{ backgroundColor: color }}
                onClick={() => handleClickColor(color)}
                className={
                  "rounded-full h-10 w-10 cursor-pointer " +
                  (color === selectedColor
                    ? " border-2 border-body scale-125"
                    : "opacity-50 hover:opacity-100 hover:border-2 hover:border-body duration-150")
                }
              ></div>{" "}
            </div>
          ))}
        </div>
        {errorColor && (
          <p className={"flex items-center gap-1 text-red-600"}>
            {" "}
            <MdErrorOutline />
            {errorColor}
          </p>
        )}
        <hr className="my-4 w-full" />
      </>

      <Gallery
        selectedImages={selectedImages}
        errorImages={errorImages}
        handleSelectedImages={handleSelectedImages}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ImageSelector;
