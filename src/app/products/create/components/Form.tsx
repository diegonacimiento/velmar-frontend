"use client";
import React, { FormEvent, useState } from "react";

import Name from "./fields/Name";
import Price from "./fields/Price";
import Description from "./fields/Description";
import Brand from "./fields/Brand";
import Categories from "./fields/Categories";
import { IBrand } from "@/types/brands";
import { ICategory } from "@/types/categories";
import { IProduct, IProductImage, Size } from "@/types/products";
import { preparePayload, validateForm } from "../utils/validate-form";
import Images from "./Images";
import ImageSelector from "./images/Selector";
import { formStyles } from "../styles/FormStyles";
import { createProduct } from "@/services/products.service";
import { useRouter } from "next/navigation";

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
  images: {
    value: IProduct["images"];
    error: string;
    currentImage: IProductImage;
    newColor: boolean;
  };
  categories: { value: IProduct["categories"]; error: string };
  brand: { value: IProduct["brand"]; error: string };
}

interface IFormProps {
  brands: IBrand[];
  categories: ICategory[];
}

const Form: React.FC<IFormProps> = ({ brands, categories }) => {
  const router = useRouter();

  const [payload, setPayload] = useState<IPayload>({
    name: { value: "", error: "" },
    price: { value: "", error: "" },
    description: { value: "", error: "" },
    images: {
      value: [],
      error: "",
      currentImage: { color: "", urls: [], sizes: [] },
      newColor: false,
    },
    categories: { value: [], error: "" },
    brand: { value: null, error: "" },
  });

  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);

  const [errorForm, setErrorForm] = useState<string>("");

  const toggleSelector = () => {
    setIsOpenSelector((prev) => !prev);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const validForm = validateForm(payload, setPayload);
      if (!validForm) return;
      const finalPayload = preparePayload(payload);
      await createProduct(finalPayload);
      router.push("/products");
    } catch (error) {
      console.error(error);
      setErrorForm("A problem occurred, please try again later");
    }
  };

  if (isOpenSelector)
    return (
      <ImageSelector
        images={payload.images}
        toggleSelector={toggleSelector}
        setPayload={setPayload}
      />
    );

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-4 p-4 w-full max-w-6xl"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <section className="flex md:w-1/2">
          {/* Images */}
          <Images
            images={payload.images}
            setPayload={setPayload}
            toggleSelector={toggleSelector}
          />
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
      <button
        type="submit"
        title="Save"
        className={formStyles.buttonSP + " m-auto w-full max-w-60"}
      >
        Save
      </button>

      <p className="text-red-600 m-auto">{errorForm}</p>
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
