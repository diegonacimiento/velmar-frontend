"use client";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import { ImageProduct, Product } from "@/types/products";
import { brandsList, categoriesList, mainColors } from "@/utils/temporal";
import ModalMsg from "./form/ModalMsg";
import ColorInput from "./form/ColorInput";

interface FormUpdateProductProps {
  onSubmit: (formData: any) => void;
  product: Product;
  handleCurrentImage: (color: string) => void;
  allImages: ImageProduct[];
  handleNewColor: (color: string) => void;
  removeColor: (color: string) => void;
}

const FormUpdateProduct: React.FC<FormUpdateProductProps> = ({
  onSubmit,
  product,
  handleCurrentImage,
  allImages,
  handleNewColor,
  removeColor,
}) => {
  const [valuesFields, setValuesFields] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

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

      <ColorInput
        allImages={allImages}
        handleCurrentImage={handleCurrentImage}
        handleNewColor={handleNewColor}
        removeColor={removeColor}
      />

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
