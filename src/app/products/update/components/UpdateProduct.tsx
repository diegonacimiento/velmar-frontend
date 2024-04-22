"use client";
import React, { useState } from "react";

import { ImageProduct, Product } from "@/types/products";
import FormUpdateProduct from "./FormUpdateProduct";
import ImageSection from "./ImageSection";
import SelectorImage from "./SelectorImage";

const UpdateProduct = ({ product }: { product: Product }) => {
  const [image, setImage] = useState<ImageProduct>(product.images[0]);
  const [allImages, setAllImages] = useState<ImageProduct[]>(product.images);
  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);
  const [newColor, setNewColor] = useState<string>("");

  const handleCurrentImage = (color: string) => {
    const imageCurrent = allImages.find((image) => image.color === color);
    if (imageCurrent) setImage(imageCurrent);
  };

  const handleNewColor = (color: string) => {
    setNewColor(color);
    toggleSelector();
  };

  const removeColor = (color: string) => {
    const newImagesList = allImages.filter((image) => image.color !== color);
    setAllImages(newImagesList);
    setImage(allImages[0]);
  };

  const handleNewImages = (urls: string[]) => {
    if (newColor) {
      const newImage = { color: newColor, urls };
      setAllImages((prev) => [...prev, newImage]);
      setImage(newImage);
      setNewColor("");
    } else {
      const index = allImages.findIndex((i) => i.color === image.color);
      const temporalImages = allImages;
      temporalImages[index].urls = urls;
      setAllImages(temporalImages);
      handleCurrentImage(image.color);
    }
    toggleSelector();
  };

  const toggleSelector = () => {
    setIsOpenSelector((prev) => !prev);
  };

  const handleSubmit = (formData: any) => {
    console.log({ ...formData, images: allImages });
  };

  return (
    <div className="relative w-full p-4">
      <div
        className={
          "flex overflow-hidden md:flex-row gap-12 sm:px-4 py-8 m-auto max-w-6xl " +
          (isOpenSelector ? "flex-row" : "flex-col")
        }
      >
        {isOpenSelector ? (
          <SelectorImage
            handleNewImages={handleNewImages}
            handleNewColor={handleNewColor}
          />
        ) : (
          <>
            <div className="flex flex-col w-full md:w-1/2">
              <ImageSection image={image} />
              <button
                title="Change image"
                type="button"
                onClick={toggleSelector}
                className="p-3 mt-4 text-secondary bg-primary hover:bg-secondary hover:text-primary hover:scale-105 duration-150"
              >
                Change image
              </button>
            </div>

            <FormUpdateProduct
              onSubmit={handleSubmit}
              product={product}
              handleCurrentImage={handleCurrentImage}
              allImages={allImages}
              handleNewColor={handleNewColor}
              removeColor={removeColor}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateProduct;
