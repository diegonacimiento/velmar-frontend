"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Name from "./fields/Name";
import Price from "./fields/Price";
import Description from "./fields/Description";
import Brand from "./fields/Brand";
import Categories from "./fields/Categories";
import { IBrand } from "@/types/brands";
import { ICategory } from "@/types/categories";
import { IProductFields } from "@/types/products";
import { preparePayload, validateForm } from "../utils/validate-form";
import Images from "./Images";
import ImageSelector from "./images/Selector";
import { formStyles } from "../styles/FormStyles";
import { createProduct } from "@/services/products.service";

interface IFormProps {
  brands: IBrand[];
  categories: ICategory[];
}

const Form: React.FC<IFormProps> = ({ brands, categories }) => {
  const router = useRouter();

  const [fields, setFields] = useState<IProductFields>({
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
      const validForm = validateForm(fields, setFields);
      if (!validForm) return;
      const finalPayload = preparePayload(fields);
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
        images={fields.images}
        toggleSelector={toggleSelector}
        setFields={setFields}
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
            images={fields.images}
            setFields={setFields}
            toggleSelector={toggleSelector}
          />
        </section>

        <section className="flex flex-col gap-4 md:w-1/2">
          {/* Name input */}
          <Name name={fields.name} setFields={setFields} />

          {/* Price input */}
          <Price price={fields.price} setFields={setFields} />

          {/* Description text-area */}
          <Description
            description={fields.description}
            setFields={setFields}
          />

          {/* Brand dropdown */}
          <Brand
            brand={fields.brand}
            setFields={setFields}
            allBrands={brands}
          />

          {/* Categories dropdown */}
          <Categories
            categories={fields.categories}
            setFields={setFields}
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
