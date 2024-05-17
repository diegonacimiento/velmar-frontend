import { Dispatch, SetStateAction } from "react";

import { IProductFields } from "@/types/products";
import { IPayloadCreateProduct, IProductImage } from "@/types/products";

export const setError = (
  field: keyof IProductFields,
  msg: string,
  setFields: Dispatch<SetStateAction<IProductFields>>
) => {
  setFields((prev) => ({
    ...prev,
    [field]: { ...prev[field], error: msg },
  }));
};

export const setField = (
  field: keyof IProductFields,
  value:
    | string
    | IProductFields["categories"]["value"]
    | IProductFields["brand"]["value"],
  setFields: Dispatch<SetStateAction<IProductFields>>
) => {
  setFields((prev) => ({
    ...prev,
    [field]: { ...prev[field], value, error: "" },
  }));
};

export const setImage = (
  setFields: Dispatch<SetStateAction<IProductFields>>,
  currentImage?: IProductImage,
  images?: IProductImage[]
) => {
  setFields((prev) => ({
    ...prev,
    images: {
      ...prev.images,
      currentImage: currentImage ? currentImage : prev.images.currentImage,
      value: images ? images : prev.images.value,
      newColor: false,
      error: "",
    },
  }));
};

export const validateForm = (
  payload: IProductFields,
  setFields: Dispatch<SetStateAction<IProductFields>>
) => {
  let validForm: boolean = true;

  // Name input
  if (payload.name.value.trim() === "") {
    validForm = false;
    setError("name", "Name is empty", setFields);
  }

  // Price input
  if (payload.price.value === "") {
    validForm = false;
    setError("price", "Price is empty", setFields);
  }

  // Description text-area
  if (payload.description.value === "") {
    validForm = false;
    setError("description", "Description is empty", setFields);
  }

  // Images
  if (payload.images.value.length < 1) {
    validForm = false;
    setError("images", "Images are empty", setFields);
  }

  return validForm;
};

export const preparePayload = (payload: IProductFields) => {
  const finalPayload = {
    name: payload.name.value,
    price: payload.price.value,
    description: payload.description.value,
    brandId: payload.brand.value?.id || null,
    categoriesIds: payload.categories.value.map((category) => category.id),
    images: payload.images.value,
  };
  return finalPayload;
};
