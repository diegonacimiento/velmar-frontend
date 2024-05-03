import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
} from "react";

import { formStyles } from "../../styles/FormStyles";
import { Payload } from "../Form";

interface PriceProps {
  price: Payload["price"];
  setPayload: Dispatch<SetStateAction<Payload>>;
}

const Price: React.FC<PriceProps> = ({ price, setPayload }) => {
  const handleChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    let number = event.target.value;

    // Validate if it is a decimal number
    if (number.includes(".")) {
      // If it is decimal, only allow 2 decimal places
      number = numberWithTwoDecimal(number);
    }

    // We take the integer part of the number
    const integer = number.split(".")[0];

    // Validate that the integer only has up to 8 numbers
    if (integer.length > 8) return;

    // Update the value
    setPayload((prev) => ({
      ...prev,
      price: { value: number.replaceAll("-", ""), error: "" },
    }));
  };

  const handleKeyDownPrice = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "e" || event.key === "-" || event.key === "+") {
      event.preventDefault();
    }
  };

  return (
    <div className={formStyles.container}>
      <label
        className={formStyles.label + (price.error && formStyles.labelError)}
      >
        Price
      </label>
      <input
        type="number"
        name="price"
        value={price.value}
        min={1}
        onChange={handleChangePrice}
        onKeyDown={handleKeyDownPrice}
        className={formStyles.input + (price.error && formStyles.inputError)}
      />
      <p className={formStyles.error}>{price.error}</p>
    </div>
  );
};

export default Price;

const numberWithTwoDecimal = (number: string) => {
  const numberSplit = number.split(".");
  const twoDecimal = numberSplit[1].substring(0, 2);
  const valueFinal = numberSplit[0] + "." + twoDecimal;
  return valueFinal;
};
