"use client";
import React, { useState } from "react";

import {
  ImageProduct,
  PayloadUpdateProduct,
  Product,
  Size,
} from "@/types/products";
import FormUpdateProduct from "./FormUpdateProduct";
import ImageSection from "./ImageSection";
import SelectorImage from "./SelectorImage";
import { Category } from "@/types/categories";
import { Brand } from "@/types/brands";
import { validateFormUpdateProduct } from "@/utils/form-update-product";
import { orderSizes } from "@/utils/temporal";
import { updateProduct } from "@/services/products.service";

interface UpdateProductProps {
  product: Product;
  categories: Category[];
  brands: Brand[];
}

const UpdateProduct: React.FC<UpdateProductProps> = ({
  product: productInitial,
  categories,
  brands,
}) => {
  // States
  const [product, setProduct] = useState<Product>({ ...productInitial });
  const [image, setImage] = useState<ImageProduct>({
    ...product.images[0],
  });
  const [allImages, setAllImages] = useState<ImageProduct[]>(
    product.images.map((image) => ({
      color: image.color,
      urls: image.urls.map((url) => url),
      sizes: image.sizes.map((size) => size),
    }))
  );
  const [newColor, setNewColor] = useState<string>("");
  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);
  const [colorsImage, setColorsImage] = useState<string[]>(
    allImages.map((image) => image.color)
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
    if (color === image.color) {
      setImage(newImagesList[0]);
    }
  };

  const removeSize = (size: Size) => {
    const index = allImages.findIndex((i) => i.color === image.color);
    const copyAllImages = [...allImages];
    copyAllImages[index].sizes = copyAllImages[index].sizes.filter(
      (sizeElement) => sizeElement !== size
    );
    setAllImages(copyAllImages);
    handleCurrentImage(image.color);
  };

  const addSize = (size: Size) => {
    const index = allImages.findIndex((i) => i.color === image.color);
    const copyAllImages = [...allImages];
    copyAllImages[index].sizes.push(size);
    copyAllImages[index].sizes = orderSizes(copyAllImages[index].sizes);
    setAllImages(copyAllImages);
    handleCurrentImage(image.color);
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
      const newImage = { color: newColor, urls, sizes: [Size.XS] };
      setAllImages((prev) => [...prev, newImage]);
      setImage(newImage);
      setNewColor("");
      setColorsImage((prev) => [...prev, newColor]);
    } else {
      updateImages(urls);
    }
    toggleSelector();
  };

  const toggleSelector = () => {
    setIsOpenSelector((prev) => !prev);
  };

  const handleSubmit = async (formData: any) => {
    const productUpdated = { ...formData, images: allImages };

    const payload: PayloadUpdateProduct = validateFormUpdateProduct(
      productUpdated,
      product
    );

    if (payload.name === "" || payload.price === "" || payload.description === "") {
      return;
    }

    const isEmpty = Object.keys(payload).length === 0;

    if (isEmpty) return;

    const response: { message: string; product: Product } = await updateProduct(
      product.id,
      payload
    );

    if (response.product) {
      setProduct(response.product);
    }

    console.log(response);
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
            isOpenSelector ? "hidden" : "flex flex-col md:flex-row gap-2 md:gap-12"
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

          <hr className="md:hidden mt-6 mb-4 border-primary"/>

          <FormUpdateProduct
            onSubmit={handleSubmit}
            product={product}
            handleCurrentImage={handleCurrentImage}
            categories={categories}
            brands={brands}
            colors={{ colorsImage, handleNewColor, removeColor }}
            sizes={{ addSize, removeSize, sizes: image.sizes }}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
