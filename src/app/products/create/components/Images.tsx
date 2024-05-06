"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { IPayload } from "./Form";
import { formStyles } from "../styles/FormStyles";
import { IProductImage, Size } from "@/types/products";
import Color from "./images/Color";

interface IImagesProps {
  images: IPayload["images"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
}

const Images: React.FC<IImagesProps> = ({ images, setPayload }) => {
  const containerImage = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<IProductImage>({
    ...images.value[0],
  });

  const handleSelectedColor = (color: string) => {
    const colorImages = images.value.find((image) => image.color === color);
    if (colorImages) setCurrentImage(colorImages);
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
    <div className="flex flex-col gap-4 overflow-hidden">
      {/* Image current section */}
      <div className="relative flex items-center">
        <button
          type="button"
          title="Previous image"
          onClick={() => scrollSelector(true)}
          className={formStyles.buttonSlideImage + " z-10"}
        >
          <IoIosArrowBack />
        </button>

        <div
          ref={containerImage}
          className={formStyles.containerImage}
        >
          {currentImage.urls.map((url) => (
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
        className={formStyles.buttonPS}
      >
        Change image
      </button>

      {/* Color section */}
      <Color
        images={images}
        currentImage={currentImage}
        handleSelectedColor={handleSelectedColor}
      />

      {/* Sizes section */}
    </div>
  );
};

export default Images;
