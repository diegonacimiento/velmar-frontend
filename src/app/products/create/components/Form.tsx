"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Name from "./fields/Name";
import { ImageProduct } from "@/types/products";
import { Category } from "@/types/categories";
import { Brand } from "@/types/brands";

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
  images: { value: ImageProduct[]; error: string };
  categories: { value: Category[]; error: string };
  brand: { value: Brand; error: string };
}

const Form = () => {
  const [payload, setPayload] = useState<Payload>({
    name: { value: "", error: "" },
    price: { value: "", error: "" },
    description: { value: "", error: "" },
    images: { value: [], error: "" },
    categories: { value: [], error: "" },
    brand: { value: {} as Brand, error: "" },
  });

  const validateForm = () => {
    let validForm: boolean = true;

    if (payload.name.value.trim() === "") {
      validForm = false;
      setPayload((prev) => ({
        ...prev,
        name: { value: prev.name.value, error: "Name is empty" },
      }));
    }

    return validForm;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validForm = validateForm();
    if (!validForm) return;
    console.log("Submitted form");
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-6">
      {/* Name input */}
      <Name name={payload.name} setPayload={setPayload} />

      {/* Price input */}
      <div>
        <label>Price</label>
        <input type="number" name="price" min={1} />
        <p></p>
      </div>

      {/* Description text-area */}
      <div>
        <label>Description</label>
        <textarea name="description" />
        <p></p>
      </div>

      {/* Categories dropdown */}
      <div>
        <label>Categories</label>
        <select name="categories" defaultValue="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p></p>
      </div>

      {/* Brand dropdown */}
      <div>
        <label>Brand</label>
        <select name="brands" defaultValue="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p></p>
      </div>

      {/* Button send form */}
      <button type="submit" title="Send">
        Send
      </button>
    </form>
  );
};

export default Form;
