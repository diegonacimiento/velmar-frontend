import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { formStyles } from "../../styles/FormStyles";
import { IPayload } from "../Form";
import { setField } from "../../utils/validate-form";

interface IDescriptionProps {
  description: IPayload["description"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
}

const Description: React.FC<IDescriptionProps> = ({
  description,
  setPayload,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 600) return;

    setField("description", event.target.value, setPayload);
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
