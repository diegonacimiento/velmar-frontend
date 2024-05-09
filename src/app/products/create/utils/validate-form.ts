import { Dispatch, SetStateAction } from "react";

import { IPayload } from "../components/Form";
import { IPayloadCreateProduct, IProductImage } from "@/types/products";

export const setError = (
  field: keyof IPayload,
  msg: string,
  setPayload: Dispatch<SetStateAction<IPayload>>
) => {
  setPayload((prev) => ({
    ...prev,
    [field]: { ...prev[field], error: msg },
  }));
};

export const setField = (
  field: keyof IPayload,
  value:
    | string
    | IPayload["categories"]["value"]
    | IPayload["brand"]["value"],
  setPayload: Dispatch<SetStateAction<IPayload>>
) => {
  setPayload((prev) => ({
    ...prev,
    [field]: { ...prev[field], value, error: "" },
  }));
};

export const setImage = (
  setPayload: Dispatch<SetStateAction<IPayload>>,
  currentImage: IProductImage,
  images?: IProductImage[]
) => {
  setPayload((prev) => ({
    ...prev,
    images: {
      ...prev.images,
      currentImage,
      value: images ? images : prev.images.value,
    },
  }));
};

export const validateForm = (
  payload: IPayload,
  setPayload: Dispatch<SetStateAction<IPayload>>
) => {
  let validForm: boolean = true;

  // Name input
  if (payload.name.value.trim() === "") {
    validForm = false;
    setError("name", "Name is empty", setPayload);
  }

  // Price input
  if (payload.price.value === "") {
    validForm = false;
    setError("price", "Price is empty", setPayload);
  }

  // Description text-area
  if (payload.description.value === "") {
    validForm = false;
    setError("description", "Description is empty", setPayload);
  }

  // Images
  if (payload.images.value.length < 1) {
    validForm = false;
    setError("images", "Images are empty", setPayload);
  }

  return validForm;
};

export const preparePayload = (payload: IPayload) => {
  const finalPayload: IPayloadCreateProduct = {
    name: payload.name.value,
    price: payload.price.value,
    description: payload.description.value,
    brandId: payload.brand.value?.id || null,
    categoriesIds: payload.categories.value.map((category) => category.id),
    images: payload.images.value,
  };
  return finalPayload;
};
