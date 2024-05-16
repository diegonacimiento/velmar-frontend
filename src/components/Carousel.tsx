"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

import { IProduct } from "@/types/products";
import Loading from "./Loading";

const Carousel = ({ products }: { products: IProduct[] }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollSelector();
    }, 12000);
    return () => clearInterval(interval);
  });

  const containerImage = useRef<HTMLDivElement>(null);

  const scrollSelector = (back?: boolean) => {
    if (containerImage.current) {
      // Visible div size
      const scrollAmount = containerImage.current.clientWidth;
      // Total div size
      const scrollWidth = containerImage.current.scrollWidth;
      // Current horizontal scroll position
      const currentPosition = containerImage.current.scrollLeft;
      // Total div size minus visible div size
      const totalWidth = scrollWidth - containerImage.current.clientWidth;

      if (back && currentPosition === 0) {
          containerImage.current.scrollLeft = totalWidth;
      } else if (!back && currentPosition === totalWidth) {
          containerImage.current.scrollLeft = 0;
      } else {
          back
              ? (containerImage.current.scrollLeft -= scrollAmount)
              : (containerImage.current.scrollLeft += scrollAmount);
      }
  }
  };

  const slides: string[] = [];

  products.forEach((item) => {
    slides.push(item.images[0].urls[0]);
  });

  const handleLoading = () => {
    setLoading(false);
    setLoadingInitial(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div ref={containerImage} id="carousel" className="flex overflow-x-scroll whitespace-nowrap overscroll-x-contain snap-mandatory snap-x scroll-smooth w-full max-w-88">
        {slides.map((slide, index) => (
          <div key={slide} className="relative flex flex-col justify-center p-2 sm:p-4 min-w-full snap-center">
            <Link
              href={`/products/${products[index].id}`}
              className="flex flex-col gap-2 pb-4 rounded-xl shadow-md w-full max-w-80 overflow-hidden"
            >
              <figure className="relative h-96 w-full">
                {loadingInitial && (
                  <div className="absolute top-0 left-0 flex items-center w-full h-full bg-secondary bg-opacity-35 animate-pulse">
                    <Loading />
                  </div>
                )}
                <Image
                  src={slide}
                  width={500}
                  height={500}
                  alt={products[index].name}
                  className={`h-full w-full duration-500 ease-linear ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleLoading}
                />
              </figure>
              <h3 className="px-2 text-lg line-clamp-1 font-bold">
                {products[index].name}
              </h3>
              <h5 className="px-2 text-sm font-semibold">
                $ {products[index].price}
              </h5>
            </Link>
          </div>
        ))}
      </div>


      <div className="flex">
        <button
          type="button"
          onClick={() => scrollSelector(true)}
          className="carousel-bts flex justify-center items-center p-4 m-4 h-14 w-14 bg-primary rounded-full duration-150 active:bg-secondary active:scale-105"
        >
          <FaAngleLeft />
        </button>
        <button
          type="button"
          onClick={() => scrollSelector()}
          className="carousel-bts flex justify-center items-center p-4 m-4 h-14 w-14 bg-primary rounded-full duration-150 active:bg-secondary active:scale-105"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
