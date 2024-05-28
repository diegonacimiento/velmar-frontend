"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Slides from "@/components/Slides";
import { ICategory, ICategoryField } from "@/types/categories";
import { formStyles } from "@/app/styles/FormStyles";
import Gallery from "./Gallery";
import { copyData } from "@/utils/functions-share";
import { createCategory, updateCategory } from "@/services/categories.service";
import {
  checkEmptyFields,
  validateCreateForm,
  validateUpdateForm,
} from "../utils/validate-form";
import Name from "./Name";
import Picture from "./Image";

interface IForm {
  category?: ICategory;
}

const Form: React.FC<IForm> = ({ category }) => {
  // Hooks
  const router = useRouter();

  // States
  const [categoryFields, setCategoryFields] = useState<ICategoryField>({
    image: { value: category?.image || "", error: "" },
    name: { value: category?.name || "", error: "" },
  });
  const [isOpenGallery, setIsOpenGallery] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [errorForm, setErrorForm] = useState<string>("");

  // Functions
  const toggleGallery = () => {
    setIsOpenGallery((prev) => !prev);
  };

  const handleCancel = () => {
    router.push("/categories");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const areGaps = checkEmptyFields(categoryFields, setCategoryFields);

      if (areGaps) return;

      const { payload, hasChanges } = category
        ? validateUpdateForm(category, categoryFields)
        : validateCreateForm(categoryFields);

      if (!hasChanges) return;

      setDisabledButton(true);

      category
        ? await updateCategory(category.id, payload)
        : await createCategory(payload);

      router.push("/categories");
      router.refresh();
    } catch (error) {
      setDisabledButton(false);
      console.error(error);
      setErrorForm("A problem occurred, please try again later");
    }
  };

  if (isOpenGallery) {
    return (
      <Gallery
        categoryFields={categoryFields}
        setCategoryFields={setCategoryFields}
        handleCancel={toggleGallery}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-4 p-4 w-full max-w-96 text-secondary"
    >
      {/* Image */}
      <Picture categoryFields={categoryFields} toggleGallery={toggleGallery} />

      {/* Name */}
      <Name
        categoryFields={categoryFields}
        setCategoryFields={setCategoryFields}
      />

      {/* Buttons form */}
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          title="Cancel"
          onClick={handleCancel}
          className={formStyles.buttonPS + " w-full max-w-60 "}
        >
          Cancel
        </button>
        <button
          type="submit"
          title="Save"
          disabled={disabledButton}
          className={
            formStyles.buttonPS +
            " w-full max-w-60 " +
            (disabledButton && "cursor-not-allowed opacity-40")
          }
        >
          Save
        </button>
      </div>
      <p className="text-red-600 m-auto">{errorForm}</p>
    </form>
  );
};

export default Form;
