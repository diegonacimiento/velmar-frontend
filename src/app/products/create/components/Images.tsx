"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { IPayload } from "./Form";
import { formStyles } from "../styles/FormStyles";

interface IImagesProps {
  images: IPayload["images"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
}

const Images: React.FC<IImagesProps> = ({ images, setPayload }) => {
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
    <div>

      <div className="relative flex items-center">
        <button
          type="button"
          title="Previous image"
          onClick={() => scrollSelector(true)}
          className="z-10 absolute p-2 m-1 h-max text-2xl text-secondary hover:bg-secondary hover:text-primary hover:rounded-full hover:scale-105 duration-150"
        >
          <IoIosArrowBack />
        </button>

        <div
          ref={containerImage}
          className="flex overflow-x-scroll whitespace-nowrap overscroll-x-contain snap-mandatory snap-x scroll-smooth w-full"
        >
          {images2[0].urls.map((url) => (
            <div key={url} className="relative min-w-full snap-center">
              <Image src={url} alt={url} height={960} width={1170} />
            </div>
          ))}
        </div>

        <button
          type="button"
          title="Next image"
          onClick={() => scrollSelector()}
          className="absolute right-0 p-2 m-1 h-max text-2xl text-secondary hover:bg-secondary hover:text-primary hover:rounded-full hover:scale-105 duration-150"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <button type="button" title="Change image" className="p-3 text-secondary bg-primary hover:bg-secondary hover:text-primary hover:scale-105 duration-150">Change image</button>

    </div>
  );
};

export default Images;

const images2 = [
  { color: "pink", urls: ["https://iili.io/Jvb2Z8J.webp"], sizes: ["M"] },
  { color: "green", urls: ["https://iili.io/JvhYNfI.webp"], sizes: ["M"] },
  { color: "pink", urls: ["https://iili.io/JvhYXxR.webp"], sizes: ["M"] },
];
