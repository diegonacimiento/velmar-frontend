"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { IProductFields } from "@/types/products";
import { formStyles } from "../styles/FormStyles";
import Color from "./Color";
import Sizes from "./Sizes";
import { LuImagePlus } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";
import { copyData } from "@/utils/functions-share";
import { setImage } from "../utils/validate-form";

interface IImagesProps {
  images: IProductFields["images"];
  setFields: Dispatch<SetStateAction<IProductFields>>;
  toggleSelector: () => void;
}

const Images: React.FC<IImagesProps> = ({
  images,
  setFields,
  toggleSelector,
}) => {
  const containerImage = useRef<HTMLDivElement>(null);

  const scrollSelector = (back?: boolean) => {
    if (containerImage.current) {
      back
        ? (containerImage.current.scrollLeft -=
            containerImage.current.clientWidth)
        : (containerImage.current.scrollLeft +=
            containerImage.current.clientWidth);
    }
  };

  const handleDeleteImage = (url: string) => {
    const index = images.value.findIndex(
      (image) => image.color === images.currentImage.color
    );
    const copy: IProductFields["images"]["value"] = copyData(images.value);
    copy[index].urls = images.value[index].urls.filter(
      (urlItem) => urlItem !== url
    );
    setImage(setFields, copy[index], copy);
  };

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      {/* Image current section */}

      {images.currentImage.urls.length < 1 ? (
        <>
          <div
            title="Add images"
            onClick={toggleSelector}
            className={
              "flex items-center justify-center h-[36.25rem] w-full text-secondary bg-primary text-5xl cursor-pointer hover:bg-opacity-40 duration-150 " +
              (images.error && "border border-red-600 bg-red-300 bg-opacity-30")
            }
          >
            {" "}
            <LuImagePlus />
          </div>
          <button
            type="button"
            title="Add images"
            onClick={toggleSelector}
            className={formStyles.buttonSP}
          >
            Add images
          </button>
        </>
      ) : (
        <>
          <div className="relative flex items-center">
            <button
              type="button"
              title="Previous image"
              onClick={() => scrollSelector(true)}
              className={
                images.currentImage.urls.length > 1
                  ? formStyles.buttonSlideImage + " z-10"
                  : "hidden"
              }
            >
              <IoIosArrowBack />
            </button>

            <div id="slide-img" ref={containerImage} className={formStyles.containerImage}>
              {images.currentImage.urls.map((url) => (
                <div key={url} className="relative min-w-full snap-center">
                  <Image
                    src={url}
                    alt={url}
                    height={1170}
                    width={960}
                    quality={100}
                  />
                  {images.currentImage.urls.length > 1 && (
                    <button
                      type="button"
                      title="Delete image"
                      onClick={() => handleDeleteImage(url)}
                      className="absolute top-1 left-1 text-3xl text-secondary hover:scale-105 hover:text-red-600 duration-500"
                    >
                      <TiDelete />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              title="Next image"
              onClick={() => scrollSelector()}
              className={
                images.currentImage.urls.length > 1
                  ? formStyles.buttonSlideImage + " right-0"
                  : "hidden"
              }
            >
              <IoIosArrowForward />
            </button>
          </div>
          <button
            type="button"
            title="Change image"
            onClick={toggleSelector}
            className={formStyles.buttonPS}
          >
            Change image
          </button>
        </>
      )}

      <p className={formStyles.error}>{images.error}</p>

      {/* Color section */}
      <Color
        images={images}
        setFields={setFields}
        toggleSelector={toggleSelector}
      />

      {/* Sizes section */}
      <Sizes images={images} setFields={setFields} />
    </div>
  );
};

export default Images;
