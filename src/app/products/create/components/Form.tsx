"use client";
import React, { FormEvent, useState } from "react";

import Name from "./fields/Name";
import Price from "./fields/Price";
import Description from "./fields/Description";
import Brand from "./fields/Brand";
import Categories from "./fields/Categories";
import { IBrand } from "@/types/brands";
import { ICategory } from "@/types/categories";
import { IProduct, Size } from "@/types/products";
import { validateForm } from "../utils/validate-form";
import Images from "./Images";

export interface IPayload {
  name: {
    value: string;
    error: string;
  };
  price: {
    value: string;
    error: string;
  };
  description: {
    value: string;
    error: string;
  };
  images: { value: IProduct["images"]; error: string };
  categories: { value: IProduct["categories"]; error: string };
  brand: { value: IProduct["brand"]; error: string };
}

interface IFormProps {
  brands: IBrand[];
  categories: ICategory[];
}

const Form: React.FC<IFormProps> = ({ brands, categories }) => {
  const [payload, setPayload] = useState<IPayload>({
    name: { value: "", error: "" },
    price: { value: "", error: "" },
    description: { value: "", error: "" },
    images: { value: [], error: "" },
    categories: { value: [], error: "" },
    brand: { value: null, error: "" },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validForm = validateForm(payload, setPayload);
    if (!validForm) return;
    console.log(payload);
    console.log("Submitted form");
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-4 p-4 w-full max-w-6xl"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <section className="flex md:w-1/2">
          {/* Images */}
          <Images images={images2} setPayload={setPayload} />
        </section>

        <section className="flex flex-col gap-4 md:w-1/2">
          {/* Name input */}
          <Name name={payload.name} setPayload={setPayload} />

          {/* Price input */}
          <Price price={payload.price} setPayload={setPayload} />

          {/* Description text-area */}
          <Description
            description={payload.description}
            setPayload={setPayload}
          />

          {/* Brand dropdown */}
          <Brand
            brand={payload.brand}
            setPayload={setPayload}
            allBrands={brands}
          />

          {/* Categories dropdown */}
          <Categories
            categories={payload.categories}
            setPayload={setPayload}
            allCategories={categories}
          />
        </section>
      </div>

      {/* Button submit form */}
      <button type="submit" title="Save">
        Save
      </button>
    </form>
  );
};

export default Form;

const images2 = {
  value: [
    {
      color: "skyblue",
      urls: ["https://iili.io/J8zaYpn.webp"],
      sizes: [Size.M],
    },
    {
      color: "green",
      urls: ["https://iili.io/J8za7kX.webp"],
      sizes: [Size.M],
    },
    {
      color: "pink",
      urls: ["https://iili.io/J8za57t.webp"],
      sizes: [Size.M],
    },
  ],
  error: "",
};