import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Payload } from "../Form";
import { formStyles } from "../../styles/FormStyles";

interface NameProps {
  name: { value: string; error: string };
  setPayload: Dispatch<SetStateAction<Payload>>;
}

const Name: React.FC<NameProps> = ({ name, setPayload }) => {
  const handleInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({
      ...prev,
      name: { value: event.target.value, error: "" },
    }));
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
        onChange={handleInputName}
        className={formStyles.input + (name.error && formStyles.inputError)}
      />
      <p className={formStyles.error}>{name.error}</p>
    </div>
  );
};

export default Name;
