import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
} from "react";

import { formStyles } from "../../styles/FormStyles";
import { IPayload } from "../Form";
import { setField } from "../../utils/validate-form";

interface IPriceProps {
  price: IPayload["price"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
}

const Price: React.FC<IPriceProps> = ({ price, setPayload }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    setField("price", number.replaceAll("-", ""), setPayload);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
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
        step={0.01}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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
