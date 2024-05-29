import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { formStyles } from "@/app/styles/FormStyles";
import { ICategoryField } from "@/types/categories";

interface IName {
  categoryFields: ICategoryField;
  setCategoryFields: Dispatch<SetStateAction<ICategoryField>>;
}

const Name: React.FC<IName> = ({ categoryFields, setCategoryFields }) => {
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryFields((prev) => ({
      ...prev,
      name: { value: event.target.value, error: "" },
    }));
  };

  return (
    <div className={formStyles.container}>
      <label
        className={
          formStyles.label +
          (categoryFields.name.error && formStyles.labelError)
        }
      >
        Name:
      </label>
      <input
        type="text"
        value={categoryFields.name.value}
        maxLength={60}
        onChange={handleChangeName}
        className={
          formStyles.input +
          (categoryFields.name.error && formStyles.inputError)
        }
      />
      <p className={formStyles.error}>{categoryFields.name.error}</p>
    </div>
  );
};

export default Name;
