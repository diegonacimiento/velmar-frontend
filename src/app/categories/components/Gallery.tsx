"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { imageUrls } from "@/utils/all-images";
import { formStyles } from "@/app/styles/FormStyles";
import { ICategory } from "@/types/categories";

interface IGallery {
  copyCategory: ICategory;
  setCopyCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  handleCancel: () => void;
}

const Gallery: React.FC<IGallery> = ({
  copyCategory,
  setCopyCategory,
  handleCancel,
}) => {
  const [offset, setOffset] = useState<number>(10);
  const [availableImages, setAvailableImages] = useState<string[]>(
    imageUrls.slice(0, 10)
  );
  const [selectedImage, setSelectedImage] = useState({
    value: copyCategory.image,
    error: "",
  });

  const getImages = () => {
    const images = imageUrls.slice(offset, offset + 10);
    setAvailableImages((prev) => [...prev, ...images]);
    setOffset(offset + 10);
  };

  const handleSelectedImages = (image: string) => {
    if (selectedImage.value === image) {
      setSelectedImage(() => ({ value: "", error: "" }));
      return;
    }
    setSelectedImage(() => ({ value: image, error: "" }));
  };

  const handleAddImage = () => {
    if (!selectedImage.value) {
      setSelectedImage((prev) => ({
        ...prev,
        error: "You must select an image",
      }));
      return;
    }
    setCopyCategory((prev) => ({ ...prev, image: selectedImage.value }));
    handleCancel();
  };

  return (
    <div className="flex flex-col items-center p-4">
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
            onClick={handleAddImage}
            className={formStyles.buttonSP + " min-w-32"}
          >
            Add images
          </button>
        </div>

        {selectedImage.error && (
          <p className={"flex items-center gap-1 text-red-600"}>
            {" "}
            <MdErrorOutline />
            {selectedImage.error}
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
                  selectedImage.value.includes(image)
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
    </div>
  );
};

export default Gallery;
