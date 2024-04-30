"use client";
import React, { useState } from "react";

import { ImageProduct, Product } from "@/types/products";
import FormUpdateProduct from "./FormUpdateProduct";
import ImageSection from "./ImageSection";
import SelectorImage from "./SelectorImage";
import { Category } from "@/types/categories";
import { Brand } from "@/types/brands";
import { validateFormUpdateProduct } from "@/utils/form-update-product";
import { mainColors } from "@/utils/temporal";

interface UpdateProductProps {
  product: Product;
  categories: Category[];
  brands: Brand[];
}

const UpdateProduct: React.FC<UpdateProductProps> = ({
  product,
  categories,
  brands,
}) => {
  // States
  const [image, setImage] = useState<ImageProduct>({ ...product.images[0] });
  const [allImages, setAllImages] = useState<ImageProduct[]>(
    product.images.map((image) => ({ ...image }))
  );
  const [newColor, setNewColor] = useState<string>("");
  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);
  const [colorsImage, setColorsImage] = useState<string[]>(
    allImages.map((image) => image.color)
  );
  const [colorsList, setColorsList] = useState<string[]>(
    mainColors.filter((color) => !colorsImage.includes(color))
  );

  // Functions
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
    setColorsImage((prev) => prev.filter((colorImage) => colorImage !== color));
    setColorsList((prev) => [...prev, color].sort());
    if (color === image.color) {
      setImage(newImagesList[0]);
    }
  };

  const updateImages = (urls: string[]) => {
    const index = allImages.findIndex((i) => i.color === image.color);
    const copyAllImages = [...allImages];
    copyAllImages[index].urls = urls;
    setAllImages(copyAllImages);
    handleCurrentImage(image.color);
  };

  const handleNewImages = (urls: string[]) => {
    if (newColor) {
      const newImage = { color: newColor, urls };
      setAllImages((prev) => [...prev, newImage]);
      setImage(newImage);
      setNewColor("");
      setColorsImage((prev) => [...prev, newColor]);
      setColorsList((prev) => prev.filter((color) => color !== newColor));
    } else {
      updateImages(urls);
    }
    toggleSelector();
  };

  const toggleSelector = () => {
    setIsOpenSelector((prev) => !prev);
  };

  const handleSubmit = (formData: any) => {
    const payload = validateFormUpdateProduct(
      { ...formData, images: allImages },
      product
    );
    console.log({ ...formData, images: allImages });
  };

  return (
    <div className="relative w-full p-4">
      <div className={"flex overflow-hidden sm:px-4 py-8 m-auto max-w-6xl "}>
        {isOpenSelector && (
          <SelectorImage
            handleNewImages={handleNewImages}
            handleNewColor={handleNewColor}
            currentImages={newColor ? [] : image.urls}
          />
        )}

        <div
          className={
            isOpenSelector ? "hidden" : "flex flex-col md:flex-row gap-12"
          }
        >
          <div className="flex flex-col w-full md:w-1/2">
            <ImageSection image={image} updateImages={updateImages} />
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
            categories={categories}
            brands={brands}
            colors={{ colorsImage, colorsList, handleNewColor, removeColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
