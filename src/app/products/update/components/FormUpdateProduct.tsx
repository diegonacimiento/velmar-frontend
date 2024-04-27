"use client";
import React, { useState } from "react";

import { ImageProduct, Product } from "@/types/products";
import ColorInput from "./form/ColorInput";
import CategoriesInput from "./form/CategoriesInput";
import BasicInputs from "./form/BasicInputs";
import { Category } from "@/types/categories";
import BrandInput from "./form/BrandInput";
import { Brand } from "@/types/brands";

interface FormUpdateProductProps {
  onSubmit: (formData: any) => void;
  product: Product;
  handleCurrentImage: (color: string) => void;
  allImages: ImageProduct[];
  handleNewColor: (color: string) => void;
  removeColor: (color: string) => void;
  categories: Category[];
  brands: Brand[];
}

const FormUpdateProduct: React.FC<FormUpdateProductProps> = ({
  onSubmit,
  product,
  handleCurrentImage,
  allImages,
  handleNewColor,
  removeColor,
  categories,
  brands,
}) => {
  const [valuesFields, setValuesFields] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  const [categoriesDropdown, setCategoriesDropdown] = useState(
    product.categories
  );

  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(
    product.brand
  );

  const handleChangeValues = (prop: any) => {
    setValuesFields({ ...valuesFields, ...prop });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const categoriesToSend = categoriesDropdown.map((category) => category.id);
    const brandId = selectedBrand?.id;
    onSubmit({
      ...valuesFields,
      categories: categoriesToSend,
      brand: brandId,
    });
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
      <BrandInput
        brands={brands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />

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
