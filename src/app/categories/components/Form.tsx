"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Slides from "@/components/Slides";
import { ICategory } from "@/types/categories";
import { formStyles } from "@/app/styles/FormStyles";
import Gallery from "./Gallery";
import { copyData } from "@/utils/functions-share";
import { updateCategory } from "@/services/categories.service";
import { validateForm } from "../utils/validate-form";

interface IForm {
  category: ICategory;
}

const Form: React.FC<IForm> = ({ category }) => {
  // Hooks
  const router = useRouter();

  // States
  const [copyCategory, setCopyCategory] = useState<ICategory>(
    copyData(category)
  );
  const [isOpenGallery, setIsOpenGallery] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [errorForm, setErrorForm] = useState<string>("");

  // Functions
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setCopyCategory((prev) => ({ ...prev, name: event.target.value }));
  };

  const toggleGallery = () => {
    setIsOpenGallery((prev) => !prev);
  };

  const handleCancel = () => {
    router.push("/categories");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { payload, hasChanges } = validateForm(category, copyCategory);

      if (!hasChanges) return;

      setDisabledButton(true);

      await updateCategory(category.id, payload);

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
        copyCategory={copyCategory}
        setCopyCategory={setCopyCategory}
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
      <Slides images={[copyCategory.image]} />
      <button
        type="button"
        title="Change image"
        onClick={toggleGallery}
        className={formStyles.buttonPS}
      >
        Change image
      </button>

      {/* Name */}
      <div className={formStyles.container}>
        <label className={formStyles.label}>Name:</label>
        <input
          type="text"
          value={copyCategory.name}
          onChange={handleChangeName}
          className={formStyles.input}
        />
      </div>

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
