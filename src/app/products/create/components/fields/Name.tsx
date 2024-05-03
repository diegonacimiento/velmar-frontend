import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Payload } from "../Form";
import { formStyles } from "../../styles/FormStyles";

interface NameProps {
  name: Payload["name"];
  setPayload: Dispatch<SetStateAction<Payload>>;
}

const Name: React.FC<NameProps> = ({ name, setPayload }) => {
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 70) return;
    
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
        onChange={handleChangeName}
        className={formStyles.input + (name.error && formStyles.inputError)}
      />
      <p className={formStyles.error}>{name.error}</p>
    </div>
  );
};

export default Name;
