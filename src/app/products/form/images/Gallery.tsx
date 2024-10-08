"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import { formStyles } from "../../../styles/FormStyles";
import { imageUrls } from "@/utils/all-images";

interface IGalleryProps {
  selectedImages: { value: string[], error: string };
  setSelectedImages: Dispatch<SetStateAction<{ value: string[], error: string }>>;
  handleSubmit: () => void;
  handleCancel: () => void;
}

const Gallery: React.FC<IGalleryProps> = ({
  selectedImages,
  setSelectedImages,
  handleSubmit,
  handleCancel,
}) => {
  const [offset, setOffset] = useState<number>(10);
  const [availableImages, setAvailableImages] = useState<string[]>(
    imageUrls.slice(0, 10)
  );

  const getImages = () => {
    const images = imageUrls.slice(offset, offset + 10);
    setAvailableImages((prev) => [...prev, ...images]);
    setOffset(offset + 10);
  };

  const handleSelectedImages = (url: string) => {
    if (selectedImages.value.includes(url)) {
      const newSelectedImages = selectedImages.value.filter(
        (image) => image !== url
      );
      setSelectedImages(() => ({
        value: [...newSelectedImages],
        error: "",
      }));
      return;
    }

    setSelectedImages((prev) => ({ value: [...prev.value, url], error: "" }));
  };

  return (
    <>
      <h2 className="text-2xl font-medium text-secondary">Select images</h2>

      <div className="z-20 sticky top-0 flex flex-col gap-4 items-center p-4 w-full bg-body">
        <div className="flex gap-8">
          <button
            type="button"
            title="Cancel"
            onClick={handleCancel}
            className={formStyles.buttonSP + " min-w-32"}
          >
            Cancel
          </button>
          <button
            type="button"
            title="Add images"
            onClick={handleSubmit}
            className={formStyles.buttonSP + " min-w-32"}
          >
            Add images
          </button>
        </div>

        {selectedImages.error && (
          <p className={"flex items-center gap-1 text-red-600"}>
            {" "}
            <MdErrorOutline />
            {selectedImages.error}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap justify-center gap-12 p-4">
          {availableImages.map((image) => (
            <div
              key={image}
              onClick={() => handleSelectedImages(image)}
              className="relative flex items-center justify-center h-80 cursor-pointer hover:scale-105 duration-150"
            >
              <div
                className={
                  selectedImages.value.includes(image)
                    ? "absolute flex justify-center items-center h-full w-full bg-secondary opacity-60"
                    : "hidden"
                }
              >
                <IoMdCheckmark className="z-10 text-5xl text-primary" />
              </div>
              <Image
                src={image}
                alt=""
                height={960}
                width={1170}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          title="More images"
          onClick={getImages}
          className={formStyles.buttonSP + " m-auto w-max"}
        >
          More images
        </button>
      </div>
    </>
  );
};

export default Gallery;