"use client";
import React, { FormEvent, useState } from "react";

import Name from "./fields/Name";
import Price from "./fields/Price";
import Description from "./fields/Description";
import { IBrand } from "@/types/brands";
import { Category } from "@/types/categories";
import { IProduct } from "@/types/products";
import { validateForm } from "../utils/validate-form";
import Dropdown from "./fields/Dropdown";
import Categories from "./fields/Categories";

export interface Payload {
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

interface FormProps {
  brands: IBrand[];
  categories: Category[];
}

const Form: React.FC<FormProps> = ({ brands, categories }) => {
  const [payload, setPayload] = useState<Payload>({
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
    <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-6">
      {/* Name input */}
      <Name name={payload.name} setPayload={setPayload} />

      {/* Price input */}
      <Price price={payload.price} setPayload={setPayload} />

      {/* Description text-area */}
      <Description description={payload.description} setPayload={setPayload} />

      {/* Categories dropdown */}
      <Categories
        categories={payload.categories}
        setPayload={setPayload}
        allCategories={categories}
      />

      {/* Brand dropdown */}
      <Dropdown
        field={payload.brand}
        setPayload={setPayload}
        options={brands}
      />
      {/* <div>
        <label>Brand</label>
        <select name="brands" defaultValue="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p></p>
      </div> */}

      {/* Button send form */}
      <button type="submit" title="Send">
        Send
      </button>
    </form>
  );
};

export default Form;
