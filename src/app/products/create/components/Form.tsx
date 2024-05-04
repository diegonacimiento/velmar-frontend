"use client";
import React, { FormEvent, useState } from "react";

import Name from "./fields/Name";
import Price from "./fields/Price";
import Description from "./fields/Description";
import { Brand } from "@/types/brands";
import { Category } from "@/types/categories";
import { Product } from "@/types/products";
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
  images: { value: Product["images"]; error: string };
  categories: { value: Product["categories"]; error: string };
  brand: { value: Product["brand"]; error: string };
}

interface FormProps {
  brands: Brand[];
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
