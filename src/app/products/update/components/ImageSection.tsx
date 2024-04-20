"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ImageSectionProps {
  image: {
    color: string;
    urls: string[];
  };
}

const ImageSection: React.FC<ImageSectionProps> = ({ image }) => {
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

  return (
    <div className="relative flex items-center">
      {/* Button preview image */}
      <button
        type="button"
        title="Previous image"
        onClick={() => scrollSelector(true)}
        className="absolute z-10 left-0 p-2 text-2xl text-secondary hover:bg-primary hover:opacity-35 hover:rounded-full hover:scale-105"
      >
        <IoIosArrowBack />
      </button>

      {/* Container images */}
      <div
        ref={containerImage}
        className="relative flex overflow-x-scroll w-full whitespace-nowrap overscroll-x-contain snap-mandatory snap-x scroll-smooth"
      >
        {image?.urls.map((url, index) => (
          <div
            key={index}
            className="relative flex flex-col min-w-full snap-center"
          >
            <figure>
              <Image
                src={url}
                alt={index.toString()}
                width={960}
                height={1170}
                quality={100}
              />
            </figure>

            {/* Counter images */}
            <span className="absolute top-0 right-1 text-secondary bg-primary rounded-xl text-xs p-1 m-1">
              {index + 1 + "/" + image.urls.length}
            </span>
          </div>
        ))}
      </div>

      {/* Button next image */}
      <button
        type="button"
        title="Next image"
        onClick={() => scrollSelector()}
        className="absolute right-0 p-2 text-2xl text-secondary hover:bg-primary hover:opacity-35 hover:rounded-full hover:scale-105 duration-150"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ImageSection;
