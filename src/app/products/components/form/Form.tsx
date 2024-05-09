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
import { IProduct, IProductFields } from "@/types/products";
import { preparePayload, validateForm } from "./utils/validate-form";
import Images from "./images/Images";
import ImageSelector from "./images/Selector";
import { formStyles } from "./styles/FormStyles";
import { createProduct, updateProduct } from "@/services/products.service";
import { prepareUpdatePayload } from "@/app/products/components/form/utils/update-product-validate";

interface IFormProps {
  product?: IProduct;
  brands: IBrand[];
  categories: ICategory[];
}

const Form: React.FC<IFormProps> = ({ product, brands, categories }) => {
  const router = useRouter();

  const [fields, setFields] = useState<IProductFields>({
    name: { value: product?.name || "", error: "" },
    price: { value: product?.price || "", error: "" },
    description: { value: product?.description || "", error: "" },
    images: {
      value: product?.images || [],
      error: "",
      currentImage: product?.images[0] || { color: "", urls: [], sizes: [] },
      newColor: false,
    },
    categories: { value: product?.categories || [], error: "" },
    brand: { value: product?.brand || null, error: "" },
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
      if (product) {
        const updatePayload = prepareUpdatePayload(finalPayload, product);
        await updateProduct(product.id, updatePayload);
        router.push(`/products/${product.id}`);
      } else {
        await createProduct(finalPayload);
        router.push("/products");
      }
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
          <Description description={fields.description} setFields={setFields} />

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
