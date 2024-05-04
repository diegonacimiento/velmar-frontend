"use client";
import React, { useState } from "react";

import { ColorsTools, IProduct, SizesTools } from "@/types/products";
import ColorInput from "./form/ColorInput";
import CategoriesInput from "./form/CategoriesInput";
import BasicInputs from "./form/BasicInputs";
import { ICategory } from "@/types/categories";
import BrandInput from "./form/BrandInput";
import { IBrand } from "@/types/brands";
import Sizes from "./form/Sizes";

interface FormUpdateProductProps {
  onSubmit: (formData: any) => void;
  product: IProduct;
  handleCurrentImage: (color: string) => void;
  categories: ICategory[];
  brands: IBrand[];
  colors: ColorsTools;
  sizes: SizesTools;
}

const FormUpdateProduct: React.FC<FormUpdateProductProps> = ({
  onSubmit,
  product,
  handleCurrentImage,
  categories,
  brands,
  colors,
  sizes,
}) => {
  const [valuesFields, setValuesFields] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  const [categoriesDropdown, setCategoriesDropdown] = useState<ICategory[]>([
    ...product.categories,
  ]);

  const [selectedBrand, setSelectedBrand] = useState<IBrand | null>(
    product.brand
  );

  const handleChangeValues = (prop: any) => {
    setValuesFields({ ...valuesFields, ...prop });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      ...valuesFields,
      categories: categoriesDropdown,
      brand: selectedBrand,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full md:w-1/2 text-secondary"
    >
      {/* Colors input */}

      <ColorInput handleCurrentImage={handleCurrentImage} colors={colors} />

      {/* Sizes input */}
      <Sizes sizes={sizes} />

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
