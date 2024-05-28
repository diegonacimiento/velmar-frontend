import { ICategory } from "@/types/categories";

export const validateForm = (original: ICategory, copy: ICategory) => {
  let payload: any = {};
  let hasChanges = false;

  if (original.image !== copy.image) {
    payload.image = copy.image;
    hasChanges = true;
  }

  if (original.name !== copy.name) {
    payload.name = copy.name;
    hasChanges = true;
  }

  return {
    payload,
    hasChanges,
  };
};
