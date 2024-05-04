import React, { Dispatch, SetStateAction } from "react";

import { Payload } from "../Form";
import { Brand } from "@/types/brands";
import { Category } from "@/types/categories";

interface DropdownProps {
  field: Payload["brand"] | Payload["categories"];
  setPayload: Dispatch<SetStateAction<Payload>>;
  options: Brand[] | Category[];
}

const Dropdown: React.FC<DropdownProps> = ({ field, setPayload, options }) => {
  const nameLabel = Array.isArray(field.value) ? "Categories" : "Brand";

  const nameField = Array.isArray(field.value) ? "categories" : "brand";

  const value = Array.isArray(field.value)
    ? [...field.value]
    : field.value
    ? [field.value]
    : [];

  const handleAdd = () => {
    const newValue = Array.isArray(field.value)
      ? [...field.value, options[0]]
      : { ...options[0] };

    setPayload((prev) => ({
      ...prev,
      [nameField]: { value: newValue, error: "" },
    }));
  };

  const handleSelect = (id: string, index: number) => {
    const atribute = options.find((option) => option.id === Number(id));

    if (atribute) {
      let newValue;
      if (Array.isArray(field.value)) {
        const copyFieldValue = field.value.map((element) => ({ ...element }));
        copyFieldValue[index] = atribute;
        newValue = copyFieldValue;
      } else {
        newValue = { ...atribute };
      }

      setPayload((prev) => ({
        ...prev,
        [nameField]: { value: newValue, error: "" },
      }));
    }
  };

  const buttonShow =
    nameField === "brand" ? value.length < 1 : value.length < 3;

  return (
    <div className="flex flex-col">
      <label>{nameLabel}</label>
      {value.map((element, index) => (
        <div key={index} className="flex">
          <select
            name={nameField}
            defaultValue=""
            onChange={(e) => handleSelect(e.target.value, index)}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <p></p>
          <button type="button">X</button>
        </div>
      ))}
      {buttonShow && (
        <button type="button" onClick={handleAdd}>
          Add {nameField}
        </button>
      )}
    </div>
  );
};

export default Dropdown;
