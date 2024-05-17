"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ICarousel {
  images: string[];
}

const Carousel2: React.FC<ICarousel> = ({ images }) => {
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
      <button
        type="button"
        title="Previous image"
        onClick={() => scrollSelector(true)}
        className={
          images.length > 1
            ? "absolute p-1.5 m-1 h-max text-2xl text-secondary hover:bg-secondary hover:text-primary hover:rounded-full hover:scale-105 duration-150 z-10"
            : "hidden"
        }
      >
        <IoIosArrowBack />
      </button>

      <div
        ref={containerImage}
        className="flex overflow-x-scroll whitespace-nowrap overscroll-x-contain snap-mandatory snap-x scroll-smooth w-full"
      >
        {images.map((url) => (
          <div key={url} className="relative min-w-full snap-center">
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
        className={
          images.length > 1
            ? "absolute p-1.5 m-1 h-max text-2xl text-secondary hover:bg-secondary hover:text-primary hover:rounded-full hover:scale-105 duration-150 right-0"
            : "hidden"
        }
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel2;
