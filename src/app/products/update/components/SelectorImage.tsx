"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

interface SelectorImageProps {
  handleNewColor: (color: string) => void;
  handleNewImages: (urls: string[]) => void;
  currentImages: string[];
}

const SelectorImage: React.FC<SelectorImageProps> = ({
  handleNewColor,
  handleNewImages,
  currentImages,
}) => {
  const [selectedImages, setSelectedImages] = useState<string[]>(currentImages);
  const [noImagesError, setNoImagesError] = useState<boolean>(false);

  const handleSelectImage = (url: string) => {
    setNoImagesError(false);
    if (selectedImages.includes(url)) {
      const newSelectedImages = selectedImages.filter((image) => image !== url);
      setSelectedImages(newSelectedImages);
      return;
    }
    setSelectedImages((prev) => [...prev, url]);
  };

  const handleAddImages = () => {
    if (selectedImages.length === 0) {
      setNoImagesError(true);
      return;
    }
    handleNewImages(selectedImages);
  };

  const handleCancel = () => {
    handleNewColor("");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row justify-evenly">
        <button
          title="Cancel"
          type="button"
          onClick={handleCancel}
          className="p-3 my-4 min-w-56 text-secondary bg-primary hover:scale-105 duration-150"
        >
          Cancel
        </button>

        <button
          title="Add"
          type="button"
          className="relative p-3 my-4 min-w-56 text-primary bg-secondary hover:scale-105 duration-150"
          onClick={handleAddImages}
        >
          Add
        </button>
      </div>

      <div className="flex justify-center items-center gap-1 p-4 h-14 text-red-600">
        {noImagesError && (
          <>
            <MdErrorOutline />
            <p>You must select at least one image</p>
          </>
        )}
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center h-600p overflow-y-auto p-4">
        {enlaces.map((image, index) => (
          <figure
            key={index}
            className="relative cursor-pointer hover:scale-105 duration-150"
            onClick={() => handleSelectImage(image)}
          >
            <div
              className={
                selectedImages.includes(image)
                  ? "absolute flex justify-center items-center h-full w-full"
                  : "hidden"
              }
            >
              <div className="absolute bg-secondary h-full w-full opacity-60"></div>
              <IoMdCheckmark className="z-10 text-5xl text-primary" />
            </div>
            <Image
              src={image}
              alt={index.toString()}
              width={960}
              height={1170}
              className="w-80"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default SelectorImage;

const enlaces = [
  "https://iili.io/Jv7Hu49.webp",
  "https://iili.io/Jv7HR2e.md.webp",
  "https://iili.io/Jv7H5Yu.md.webp",
  "https://iili.io/Jv7H7kb.md.webp",
  "https://iili.io/Jv7HcTx.md.webp",
];
