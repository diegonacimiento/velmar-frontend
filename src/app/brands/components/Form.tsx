"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { IBrand } from "@/types/brands";
import { formStyles } from "@/app/styles/FormStyles";
import { createBrand, updateBrand } from "@/services/brands.service";

interface IForm {
  brand?: IBrand;
}

const Form: React.FC<IForm> = ({ brand }) => {
  // Hooks
  const router = useRouter();

  // States
  const [name, setName] = useState<string>(brand?.name || "");
  const [errorName, setErrorName] = useState<string>("");
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [errorForm, setErrorForm] = useState<string>("");

  // Functions
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorName) {
      setErrorName("");
    }
    setName(event.target.value);
  };

  const handleCancel = () => {
    router.push("/brands");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!name) {
        setErrorName("Name is empty");
        return;
      }

      if (brand?.name === name) return;

      setDisabledButton(true);

      const payload = { name };

      brand ? await updateBrand(brand.id, payload) : await createBrand(payload);

      router.push("/brands");
      router.refresh();
    } catch (error) {
      setDisabledButton(false);
      console.error(error);
      setErrorForm("A problem occurred, please try again later");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-4 p-4 w-full max-w-96 text-secondary"
    >
      {/* Name input */}
      <div className={formStyles.container}>
        <label
          className={formStyles.label + (errorName && formStyles.labelError)}
        >
          Name
        </label>
        <input
          type="text"
          value={name}
          maxLength={60}
          onChange={handleChangeName}
          className={formStyles.input + (errorName && formStyles.inputError)}
        />
        <p className={formStyles.error}>{errorName}</p>
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
