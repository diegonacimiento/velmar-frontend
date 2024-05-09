"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

import { formStyles } from "../../styles/FormStyles";
import { MdOutlineClose } from "react-icons/md";
import { allSizes, orderSizes } from "@/utils/temporal";
import { IProductImage, Size } from "@/types/products";
import { IPayload } from "../Form";
import { setImage } from "../../utils/validate-form";
import { copyData } from "@/utils/functions-share";

interface ISizesProps {
  images: IPayload["images"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
}

const Sizes: React.FC<ISizesProps> = ({ images, setPayload }) => {
  const [showSizeList, setShowSizeList] = useState<boolean>(false);

  const toggleSizeList = () => {
    setShowSizeList((prev) => !prev);
  };

  const handleAddSize = (size: Size) => {
    if (showSizeList) {
      const index = images.value.findIndex(
        (image) => image.color === images.currentImage.color
      );
      const copy: IProductImage[] = copyData(images.value);
      copy[index].sizes = orderSizes([...copy[index].sizes, size]);
      setImage(setPayload, copy[index], copy);
      toggleSizeList();
    }
  };

  const handleDeleteSize = (index: number) => {
    const indexImage = images.value.findIndex(
      (image) => image.color === images.currentImage.color
    );
    const copy: IProductImage[] = copyData(images.value);
    copy[indexImage].sizes.splice(index, 1);
    setImage(setPayload, copy[indexImage], copy);
  };

  const sizes = showSizeList
    ? allSizes.filter((size) => !images.currentImage.sizes.includes(size))
    : images.currentImage.sizes;

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Sizes</label>

      <div className="flex gap-4 flex-wrap p-4 rounded-md min-h-[4.5rem] bg-primary">
        {showSizeList && (
          <button
            type="button"
            title="Close"
            onClick={toggleSizeList}
            className="flex items-center justify-center border border-red-600 rounded-full h-10 w-10 hover:scale-105 hover:border-2 duration-150"
          >
            <MdOutlineClose />
          </button>
        )}
        {sizes?.map((size, index) => (
          <div
            key={size}
            onClick={() => handleAddSize(size)}
            className={
              "relative flex justify-center items-center rounded-full h-10 w-10 cursor-pointer text-sm border-2 border-body hover:bg-body duration-150"
            }
          >
            {size}
            {!showSizeList && sizes.length > 1 && (
              <button
                type="button"
                title="Delete size"
                onClick={() => handleDeleteSize(index)}
                className="absolute flex justify-center items-center -top-2 -right-1 rounded-full bg-red-600 h-5 w-5 text-primary text-base hover:scale-110 z-10 duration-150"
              >
                <MdOutlineClose />
              </button>
            )}
          </div>
        ))}

        {sizes.length > 0 && sizes.length < 7 && !showSizeList && (
          <button
            type="button"
            title="Add color"
            onClick={toggleSizeList}
            className="rounded-full h-10 w-10 bg-gray-300 text-white text-xl opacity-70 hover:opacity-100 hover:border-2 hover:border-body duration-150"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Sizes;
