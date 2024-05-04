import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Payload } from "../Form";
import { formStyles } from "../../styles/FormStyles";
import { setField } from "../../utils/validate-form";

interface NameProps {
  name: Payload["name"];
  setPayload: Dispatch<SetStateAction<Payload>>;
}

const Name: React.FC<NameProps> = ({ name, setPayload }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 70) return;

    setField("name", event.target.value, setPayload);
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
