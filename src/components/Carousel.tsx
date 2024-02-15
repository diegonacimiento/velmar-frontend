"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

import { Product } from "@/types/products";
import Loading from "./Loading";

const Carousel = ({ products }: { products: Product[] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  });

  const slides = [
    products[0].image,
    products[1].image,
    products[2].image,
    products[3].image,
    products[4].image,
  ];

  const handleLoading = () => {
    setLoading(false);
    setLoadingInitial(false);
  };

  const prevSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, 500);
  };

  const nextSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 500);
  };

  const goToSlide = (index: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentSlide(index);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center">
      <Link href={`/products/${products[currentSlide].id}`} className="flex flex-col gap-2 pb-4 rounded-xl shadow-md w-full max-w-80 overflow-hidden">
        
          <figure className="relative h-96 w-full p-2 bg-white">
            {loadingInitial && (
              <div className="absolute top-0 left-0 flex items-center w-full h-full bg-secondary bg-opacity-35 animate-pulse">
                <Loading />
              </div>
            )}
            <Image
              src={slides[currentSlide]}
              width={500}
              height={500}
              alt={products[currentSlide].title}
              className={`h-full w-full duration-500 ease-linear ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={handleLoading}
            />
          </figure>
          <h3 className="px-2 text-lg line-clamp-1 font-bold">
            {products[currentSlide].title}
          </h3>
          <h5 className="px-2 text-sm font-semibold">
            $ {products[currentSlide].price}
          </h5>
        
      </Link>

      <div className="flex gap-1 my-4">
        {slides.map((slide, index) => (
          <div
            id="carousel-item"
            className={
              "h-4 w-4 rounded-full duration-150 active:bg-gray-400 " +
              (slide === slides[currentSlide] ? "bg-secondary" : "bg-gray-300")
            }
            key={index}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      <div className="flex">
        <button
          type="button"
          onClick={prevSlide}
          className="carousel-bts flex justify-center items-center p-4 m-4 h-14 w-14 bg-primary rounded-full duration-150 active:bg-secondary active:scale-105"
        >
          <FaAngleLeft />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="carousel-bts flex justify-center items-center p-4 m-4 h-14 w-14 bg-primary rounded-full duration-150 active:bg-secondary active:scale-105"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
