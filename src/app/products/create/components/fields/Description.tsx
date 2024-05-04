import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { formStyles } from "../../styles/FormStyles";
import { Payload } from "../Form";
import { setField } from "../../utils/validate-form";

interface DescriptionProps {
  description: Payload["description"];
  setPayload: Dispatch<SetStateAction<Payload>>;
}

const Description: React.FC<DescriptionProps> = ({
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
