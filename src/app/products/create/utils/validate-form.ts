import { Dispatch, SetStateAction } from "react";

import { IPayload } from "../components/Form";

const setError = (
  field: keyof IPayload,
  msg: string,
  setPayload: Dispatch<SetStateAction<IPayload>>
) => {
  setPayload((prev) => ({
    ...prev,
    [field]: { value: prev[field].value, error: msg },
  }));
};

export const setField = (
  field: keyof IPayload,
  value: string | IPayload["categories"]["value"] | IPayload["brand"]["value"],
  setPayload: Dispatch<SetStateAction<IPayload>>
) => {
  setPayload((prev) => ({
    ...prev,
    [field]: { value, error: "" },
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

  return validForm;
};
