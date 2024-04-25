"use client";
import React, { useState } from "react";

import { ImageProduct, Product } from "@/types/products";
import { brandsList } from "@/utils/temporal";
import ColorInput from "./form/ColorInput";
import CategoriesInput from "./form/CategoriesInput";
import BasicInputs from "./form/BasicInputs";
import { Category } from "@/types/categories";

interface FormUpdateProductProps {
  onSubmit: (formData: any) => void;
  product: Product;
  handleCurrentImage: (color: string) => void;
  allImages: ImageProduct[];
  handleNewColor: (color: string) => void;
  removeColor: (color: string) => void;
  categories: Category[];
}

const FormUpdateProduct: React.FC<FormUpdateProductProps> = ({
  onSubmit,
  product,
  handleCurrentImage,
  allImages,
  handleNewColor,
  removeColor,
  categories,
}) => {
  const [valuesFields, setValuesFields] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  const [categoriesDropdown, setCategoriesDropdown] = useState(
    product.categories
  );

  const handleChangeValues = (prop: any) => {
    setValuesFields({ ...valuesFields, ...prop });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const categoriesToSend = categoriesDropdown.map((category) => category.id);
    onSubmit({ ...valuesFields, categories: categoriesToSend });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full md:w-1/2 text-secondary"
    >
      {/* Colors input */}

      <ColorInput
        allImages={allImages}
        handleCurrentImage={handleCurrentImage}
        handleNewColor={handleNewColor}
        removeColor={removeColor}
      />
      {/* Basic inputs (name, price, description) */}
      <BasicInputs
        valuesFields={valuesFields}
        handleChangeValues={handleChangeValues}
      />

      {/* Categories input */}
      <CategoriesInput
        categories={categories}
        categoriesDropdown={categoriesDropdown}
        setCategoriesDropdown={setCategoriesDropdown}
      />

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
