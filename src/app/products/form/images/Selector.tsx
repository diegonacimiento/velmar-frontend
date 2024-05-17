"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { IProductFields } from "@/types/products";
import { copyData } from "@/utils/functions-share";
import { IProductImage, Size } from "@/types/products";
import { setImage } from "../utils/validate-form";
import Gallery from "./Gallery";
import ColorPicker from "./ColorPicker";

interface IImageSelectorProps {
  images: IProductFields["images"];
  toggleSelector: () => void;
  setFields: Dispatch<SetStateAction<IProductFields>>;
}

const ImageSelector: React.FC<IImageSelectorProps> = ({
  images,
  toggleSelector,
  setFields,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImages, setSelectedImages] = useState({
    value: images.newColor ? [] : [...images.currentImage.urls],
    error: "",
  });
  const [selectedColor, setSelectedColor] = useState({
    value: images.newColor ? "" : images.currentImage.color,
    error: "",
  });

  const incompleteSteps = () => {
    if (selectedImages.value.length === 0) {
      setSelectedImages((prev) => ({
        ...prev,
        error: "You must select at least one image",
      }));
      return true;
    }

    if (!selectedColor.value) {
      setSelectedColor((prev) => ({ ...prev, error: "Select a color" }));
      window.scrollTo(0, 0);
      return true;
    }

    return false;
  };

  const addImages = () => {
    const newImage: IProductImage = {
      color: selectedColor.value,
      urls: [...selectedImages.value],
      sizes: [Size.XS],
    };

    setImage(setFields, newImage, [...images.value, newImage]);
  };

  const updateImage = () => {
    const color = images.currentImage.color;

    const index = images.value.findIndex((image) => image.color === color);

    const copy: IProductImage[] = copyData(images.value);

    copy[index].color = selectedColor.value;
    copy[index].urls = [...selectedImages.value];

    setImage(setFields, copy[index], copy);
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

  const handleCancel = () => {
    setFields((prev) => ({
      ...prev,
      images: { ...prev.images, newColor: false },
    }));
    toggleSelector();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full">
      <ColorPicker
        imagesValue={images.value}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <Gallery
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ImageSelector;
