"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

import Amount from "@/components/Amount";
import Slides from "@/components/Slides";
import { IProduct, Size } from "@/types/products";
import useVelmarContext from "@/hooks/useVelmarContext";
import OptionsButtons from "./OptionsButtons";

interface IProductDetails {
  product: IProduct;
}

const ProductDetails: React.FC<IProductDetails> = ({ product }) => {
  // Hooks
  const { roleUser, addProductToCart } = useVelmarContext();
  const router = useRouter();
  const { isAuth } = useVelmarContext();

  // States
  const [quantity, setAmount] = useState<number>(1);
  const [btIsChecked, setBtIsChecked] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>(
    product.images.map((image) => image.color)
  );
  const [images, setImages] = useState({
    value: product.images,
    currentImage: product.images[0],
  });
  const [selectedSize, setSelectedSize] = useState<Size>();
  const [errorSize, setErrorSize] = useState<string>("");

  // Functions
  const handleSelectColor = (color: string) => {
    const image = product.images.find((image) => image.color === color);
    if (image) {
      setImages((prev) => ({
        ...prev,
        currentImage: image,
      }));
    }
  };

  const handleSelectSize = (size: Size) => {
    setSelectedSize(size);
    setErrorSize("");
  };

  const handleAddToCart = () => {
    if (!isAuth) {
      router.push("/sign-in");
      return;
    }
    if (selectedSize) {
      setBtIsChecked(true);
      addProductToCart(
        product,
        quantity,
        selectedSize,
        images.currentImage.color
      );
      setAmount(1);
      setTimeout(() => {
        setBtIsChecked(false);
      }, 5000);
    } else {
      setErrorSize("You must choose a size");
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className="flex">
        <button
          type="button"
          title="Back"
          onClick={handleBack}
          className="flex justify-center items-center gap-1 py-3 sm:mx-4 w-max rounded-md text-secondary hover:scale-105 duration-150"
        >
          <IoMdArrowRoundBack />
          Back
        </button>

        <Link href="/products">
          <button
            type="button"
            title="All products"
            className="flex justify-center items-center gap-1 py-3 mx-4 w-max rounded-md text-secondary hover:scale-105 duration-150"
          >
            All products
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-4 sm:p-4">
        {/* Images */}
        <div className="md:w-1/2">
          <Slides images={images.currentImage.urls} />
        </div>

        {/* Data */}
        <div className="flex flex-col gap-4 md:w-1/2 text-secondary">
          {(roleUser === "salesperson" || roleUser === "superadmin") && (
            <OptionsButtons
              id={product.id}
              isProtected={product.isProtected}
              role={roleUser}
            />
          )}

          <h1 className="text-2xl font-bold line-clamp-2">{product.name}</h1>
          <p className="w-30 text-lg font-semibold">$ {product.price}</p>

          {/* Colors */}
          <div className="flex gap-4 p-4 w-full rounded-lg bg-primary">
            {colors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                onClick={() => handleSelectColor(color)}
                className={
                  "rounded-full h-10 w-10 cursor-pointer " +
                  (color === images.currentImage.color
                    ? " border-2 border-secondary"
                    : "opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150")
                }
              ></div>
            ))}
          </div>

          {/* Sizes */}
          <div
            className={
              "flex flex-wrap gap-4 p-4 w-full rounded-lg bg-primary " +
              (errorSize && "border border-red-600")
            }
          >
            {images.currentImage.sizes.map((size) => (
              <div
                key={size}
                translate="no"
                onClick={() => handleSelectSize(size)}
                className={
                  "relative flex justify-center items-center rounded-full h-10 w-10 cursor-pointer text-sm border-2 border-body hover:bg-body duration-150 " +
                  (selectedSize === size && "bg-body")
                }
              >
                {size}
              </div>
            ))}
          </div>
          <p className="px-2 text-sm text-red-600">{errorSize}</p>

          <div className="flex items-center justify-between gap-4">
            <Amount quantity={quantity} setAmount={setAmount} />

            {btIsChecked ? (
              <span className="flex justify-center items-center h-12 w-40">
                Product added {"\u2714"}
              </span>
            ) : (
              <button
                className="border-2 border-secondary p-3 bg-secondary rounded-lg text-lg font-semibold text-body hover:scale-105 hover:bg-primary hover:text-secondary duration-150"
                type="button"
                title="Add to cart"
                onClick={handleAddToCart}
                id="bt-addToCart"
              >
                Add to cart
              </button>
            )}
          </div>

          <hr />

          <h3 className="text-lg font-medium">Description:</h3>
          <p className={"text-justify px-2"}>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
