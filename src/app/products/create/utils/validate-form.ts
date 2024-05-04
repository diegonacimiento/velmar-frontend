import { Dispatch, SetStateAction } from "react";

import { Payload } from "../components/Form";

const setError = (
  field: keyof Payload,
  msg: string,
  setPayload: Dispatch<SetStateAction<Payload>>
) => {
  setPayload((prev) => ({
    ...prev,
    [field]: { value: prev[field].value, error: msg },
  }));
};

export const setField = (
  field: keyof Payload,
  value: string | Payload["categories"]["value"] | Payload["brand"]["value"],
  setPayload: Dispatch<SetStateAction<Payload>>
) => {
  setPayload((prev) => ({
    ...prev,
    [field]: { value, error: "" },
  }));
};

export const validateForm = (
  payload: Payload,
  setPayload: Dispatch<SetStateAction<Payload>>
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
