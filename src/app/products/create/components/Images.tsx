"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { IPayload } from "./Form";
import { formStyles } from "../styles/FormStyles";
import { IProductImage, Size } from "@/types/products";
import Color from "./images/Color";
import Sizes from "./images/Sizes";
import { copyData } from "@/utils/functions-share";
import { LuImagePlus } from "react-icons/lu";
import { setCurrentImage, setError, setField } from "../utils/validate-form";

interface IImagesProps {
  images: IPayload["images"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
  toggleSelector: () => void;
}

const Images: React.FC<IImagesProps> = ({
  images,
  setPayload,
  toggleSelector,
}) => {
  const containerImage = useRef<HTMLDivElement>(null);

  const handleAddImages = () => {
    setError(
      "images",
      "To add images, you must first select a color",
      setPayload
    );
  };

  const scrollSelector = (back?: boolean) => {
    if (containerImage.current) {
      back
        ? (containerImage.current.scrollLeft -=
            containerImage.current.clientWidth)
        : (containerImage.current.scrollLeft +=
            containerImage.current.clientWidth);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      {/* Image current section */}

      {images.currentImage.urls.length < 1 ? (
        <div
          title="Add images"
          onClick={handleAddImages}
          className="flex items-center justify-center h-[36.25rem] w-full text-secondary bg-primary text-5xl cursor-pointer hover:bg-opacity-40 duration-150"
        >
          {" "}
          <LuImagePlus />
        </div>
      ) : (
        <>
          <div className="relative flex items-center">
            <button
              type="button"
              title="Previous image"
              onClick={() => scrollSelector(true)}
              className={formStyles.buttonSlideImage + " z-10"}
            >
              <IoIosArrowBack />
            </button>

            <div ref={containerImage} className={formStyles.containerImage}>
              {images.currentImage.urls.map((url) => (
                <div key={url} className="min-w-full snap-center">
                  <Image
                    src={url}
                    alt={url}
                    height={1170}
                    width={960}
                    quality={100}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              title="Next image"
              onClick={() => scrollSelector()}
              className={formStyles.buttonSlideImage + " right-0"}
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
        setPayload={setPayload}
        toggleSelector={toggleSelector}
      />

      {/* Sizes section */}
      <Sizes images={images} setPayload={setPayload} />
    </div>
  );
};

export default Images;
