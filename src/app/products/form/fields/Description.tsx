import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { formStyles } from "../../../styles/FormStyles";
import { IProductFields } from "@/types/products";
import { setField } from "../utils/validate-form";

interface IDescriptionProps {
  description: IProductFields["description"];
  setFields: Dispatch<SetStateAction<IProductFields>>;
}

const Description: React.FC<IDescriptionProps> = ({
  description,
  setFields,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 600) return;

    setField("description", event.target.value, setFields);
  };

  return (
    <div className={formStyles.container}>
      <label
        className={
          formStyles.label + (description.error && formStyles.labelError)
        }
      >
        Description
      </label>
      <textarea
        name="description"
        value={description.value}
        maxLength={600}
        onChange={handleChange}
        className={
          formStyles.textArea + (description.error && formStyles.textAreaError)
        }
      />
      <p className={formStyles.error}>{description.error}</p>
    </div>
  );
};

export default Description;
