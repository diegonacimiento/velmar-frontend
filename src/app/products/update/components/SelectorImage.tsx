"use client";
import React from "react";
import Image from "next/image";

interface SelectorImageProps {
  handleNewColor: (color: string) => void;
  handleNewImages: (urls: string[]) => void;
}

const SelectorImage: React.FC<SelectorImageProps> = ({
  handleNewColor,
  handleNewImages,
}) => {
  const handleCancel = () => {
    handleNewColor("");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {enlaces.map((image, index) => (
          <figure
            key={index}
            className="cursor-pointer hover:scale-105 duration-150"
            onClick={() => handleNewImages([image])}
          >
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

      <div className="flex justify-evenly">
        <button
          title="Cancel"
          type="button"
          onClick={handleCancel}
          className="p-3 my-4 min-w-56 text-secondary bg-primary hover:scale-105 duration-150"
        >
          Cancel
        </button>

        <button
          title="Select"
          type="button"
          className="p-3 my-4 min-w-56 text-primary bg-secondary hover:scale-105 duration-150"
        >
          Select
        </button>
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
