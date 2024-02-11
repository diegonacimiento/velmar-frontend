"use client";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products";

const Carousel = ({ products }: { products: Product[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    products[0].image,
    products[1].image,
    products[2].image,
    products[3].image,
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div className="relative h-56 w-full overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full -translate-x-1/2 flex justify-center -translate-y-1/2 top-1/2 left-1/2 ${
              index === currentSlide ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <Image
              width={350}
              height={350}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="h-48 w-48"
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-secondary" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <div className="absolute top-0 h-full w-full flex items-center justify-between z-10">
        <button
          type="button"
          className="h-max p-4 bg-white rounded-full focus:outline-none"
          onClick={prevSlide}
          data-carousel-prev
        >
          {"<"}
        </button>
        <button
          type="button"
          className="h-max rounded-full p-4 bg-white focus:outline-none"
          onClick={nextSlide}
          data-carousel-next
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
