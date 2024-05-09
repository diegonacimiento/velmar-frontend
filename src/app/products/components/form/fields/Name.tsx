import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { IProductFields } from "@/types/products";
import { formStyles } from "../styles/FormStyles";
import { setField } from "../utils/validate-form";

interface INameProps {
  name: IProductFields["name"];
  setFields: Dispatch<SetStateAction<IProductFields>>;
}

const Name: React.FC<INameProps> = ({ name, setFields }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 70) return;

    setField("name", event.target.value, setFields);
  };

  return (
    <div className={formStyles.container}>
      <label
        className={formStyles.label + (name.error && formStyles.labelError)}
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name.value}
        maxLength={70}
        onChange={handleChange}
        className={formStyles.input + (name.error && formStyles.inputError)}
      />
      <p className={formStyles.error}>{name.error}</p>
    </div>
  );
};

export default Name;
