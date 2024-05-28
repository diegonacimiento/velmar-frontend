import { ICategory, ICategoryField } from "@/types/categories";
import { Dispatch, SetStateAction } from "react";

export const validateUpdateForm = (
  original: ICategory,
  copy: ICategoryField
) => {
  let payload: any = {};
  let hasChanges = false;

  if (original.image !== copy.image.value) {
    payload.image = copy.image.value;
    hasChanges = true;
  }

  if (original.name !== copy.name.value) {
    payload.name = copy.name.value;
    hasChanges = true;
  }

  return {
    payload,
    hasChanges,
  };
};

export const validateCreateForm = (copy: ICategoryField) => {
  if (!copy.image.value && !copy.name.value) {
    return {
      payload: {},
      hasChanges: false,
    };
  }
  return {
    payload: {
      image: copy.image.value,
      name: copy.name.value,
    },
    hasChanges: true,
  };
};

export const checkEmptyFields = (
  copy: ICategoryField,
  setCopy: Dispatch<SetStateAction<ICategoryField>>
) => {
  let areGaps = false;
  if (!copy.image.value) {
    areGaps = true;
    setCopy((prev) => ({
      ...prev,
      image: { value: prev.image.value, error: "Image is empty" },
    }));
  }
  if (!copy.name.value) {
    areGaps = true;
    setCopy((prev) => ({
      ...prev,
      name: { value: prev.name.value, error: "Name is empty" },
    }));
  }

  return areGaps;
};
