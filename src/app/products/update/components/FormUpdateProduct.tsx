"use client";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import { ImageProduct, Product } from "@/types/products";
import { brandsList, categoriesList, mainColors } from "@/utils/temporal";

interface FormUpdateProductProps {
  onSubmit: (formData: any) => void;
  product: Product;
  handleCurrentImage: (color: string) => void;
  allImages: ImageProduct[];
  handleNewColors: (color: string) => void;
}

const FormUpdateProduct: React.FC<FormUpdateProductProps> = ({
  onSubmit,
  product,
  handleCurrentImage,
  allImages,
  handleNewColors,
}) => {
  const [valuesFields, setValuesFields] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  const [colorsImage, setColorsImage] = useState<string[]>(
    allImages.map((image) => image.color)
  );
  const [colorsList, setColorsList] = useState<string[]>(
    mainColors.filter((color) => !colorsImage.includes(color))
  );

  const [openColors, setOpenColors] = useState<boolean>(false);

  const handleColorSelect = (color: string) => {
    const prevColorsImage = colorsImage;
    prevColorsImage.push(color);
    setColorsImage(prevColorsImage);
    const newColorList = colorsList.filter((element) => element !== color);
    setColorsList(newColorList);
    handleNewColors(color);
    toggleOpenColors();
  };

  const toggleOpenColors = () => {
    setOpenColors((prev) => !prev);
  };

  const handleChangeValues = (prop: any) => {
    setValuesFields({ ...valuesFields, ...prop });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(valuesFields);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full md:w-1/2 text-secondary"
    >
      {/* Name input */}
      <label className={`px-1 text-sm font-light mt-2`}>Name</label>
      <input
        onChange={(e) =>
          handleChangeValues({ [e.target.name]: e.target.value })
        }
        name="title"
        value={valuesFields.name}
        className={`border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none`}
      />

      {/* Price input */}
      <label className={`px-1 text-sm font-light mt-2`}>Price</label>
      <input
        name="price"
        type="number"
        onChange={(e) =>
          handleChangeValues({ [e.target.name]: e.target.value })
        }
        value={valuesFields.price}
        className={`border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none`}
      />

      {/* Description input */}
      <label className={`px-1 text-sm font-light mt-2`}>Description:</label>
      <textarea
        name="description"
        onChange={(e) =>
          handleChangeValues({ [e.target.name]: e.target.value })
        }
        value={valuesFields.description}
        className={`border rounded-lg border-secondary p-1.5 my-1 h-80 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none`}
        maxLength={600}
      />

      {/* Colors input */}
      <label className="px-1 text-sm font-light mt-2">Colors:</label>
      <div className="relative flex p-3 bg-primary rounded-lg">
        {/* Available colors  */}
        <div
          className={openColors ? "flex flex-col gap-2 items-center" : "hidden"}
        >
          <button
            type="button"
            className="max-w-20 px-2 rounded-lg border border-secondary hover:bg-body duration-150"
            onClick={toggleOpenColors}
          >
            Close
          </button>
          <div className="flex flex-wrap gap-2 justify-center">
            {colorsList.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={`flex justify-center items-center rounded-full w-8 h-8 cursor-pointer hover:opacity-50 duration-150`}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Image colors */}
        <div className={openColors ? "hidden" : "flex gap-2"}>
          {colorsImage.map((color, index) => (
            <div key={index} className="relative">
              <div
                style={{ backgroundColor: color }}
                className={`flex justify-center items-center rounded-full w-8 h-8 cursor-pointer hover:opacity-70 hover:border-2 hover:border-secondary duration-150`}
                onClick={() => handleCurrentImage(color)}
              ></div>
              <div className="absolute flex justify-center items-center -top-2 -right-1 rounded-full bg-secondary h-5 w-5 text-primary hover:bg-red-600 hover:scale-110 z-10 duration-150">
                <MdOutlineClose />
              </div>
            </div>
          ))}
          <button
            type="button"
            title="Add color"
            className="flex justify-center items-center rounded-full w-8 h-8 bg-gray-400 text-white cursor-pointer hover:opacity-50 duration-150"
            onClick={toggleOpenColors}
          >
            +
          </button>
        </div>
      </div>

      {/* Categories input */}
      <div className="flex flex-col">
        <label className="text-sm font-light">Category</label>
        <select className="px-1.5 py-2 my-1 border border-secondary rounded-lg focus:outline-0">
          {categoriesList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="button">Add other category</button>
      </div>

      {/* Brand input */}
      <div className="flex flex-col">
        <label className="text-sm font-light">Brand</label>
        <select className="px-1.5 py-2 my-1 border border-secondary rounded-lg focus:outline-0">
          {brandsList.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Button form */}
      <button
        type="submit"
        title="Save"
        className="p-3 mt-4 text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150"
      >
        Save
      </button>
    </form>
  );
};

export default FormUpdateProduct;
