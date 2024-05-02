"use client";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

interface BasicInputsProps {
  valuesFields: {
    name: string;
    price: string;
    description: string;
  };
  handleChangeValues: (prop: any) => void;
}

const BasicInputs: React.FC<BasicInputsProps> = ({
  valuesFields,
  handleChangeValues,
}) => {
  const [errorName, setErrorName] = useState<string>("");
  const [errorPrice, setErrorPrice] = useState<string>("");
  const [errorDescription, setErrorDescription] = useState<string>("");

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setErrorName("Product name cannot be empty");
    } else {
      setErrorName("");
    }

    handleChangeValues({ [event.target.name]: event.target.value });
  };

  const handlePrice = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setErrorPrice("Product price cannot be empty");
    } else {
      setErrorPrice("");
    }

    handleChangeValues({
      [event.target.name]: event.target.value.replace(/[+-]/g, ""),
    });
  };

  const handleDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value === "") {
      setErrorDescription("Product description cannot be empty");
    } else {
      setErrorDescription("");
    }

    handleChangeValues({ [event.target.name]: event.target.value });
  };

  const handleKeyDownPrice = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-" || event.key === "+" || event.key === "e") {
      event.preventDefault();
    }
  };

  return (
    <>
      {/* Name input */}
      <div className="flex flex-col gap-1">
        <label
          className={
            `px-1 text-sm font-light ` + (errorName && "text-red-600")
          }
        >
          Name
        </label>
        <input
          onChange={(event) => handleName(event)}
          name="name"
          value={valuesFields.name}
          className={
            `border rounded-lg border-secondary p-1.5 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none ` +
            (errorName && "border-red-600 focus:outline-red-400")
          }
        />
        <p className="px-1.5 h-4 text-xs text-red-600">{errorName}</p>
      </div>

      {/* Price input */}
      <div className="flex flex-col gap-1">
        <label
          className={
            `px-1 text-sm font-light ` + (errorPrice && "text-red-600")
          }
        >
          Price
        </label>
        <input
          name="price"
          type="number"
          min={1}
          onKeyDown={(event) => handleKeyDownPrice(event)}
          onChange={(event) => handlePrice(event)}
          value={valuesFields.price}
          className={
            `border rounded-lg border-secondary p-1.5 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none ` +
            (errorPrice && "border-red-600 focus:outline-red-400")
          }
        />
        <p className="px-1.5 h-4 text-xs text-red-600">{errorPrice}</p>
      </div>

      {/* Description input */}
      <div className="flex flex-col gap-1">
        <label
          className={
            `px-1 text-sm font-light ` + (errorDescription && "text-red-600")
          }
        >
          Description
        </label>
        <textarea
          name="description"
          onChange={(event) => handleDescription(event)}
          value={valuesFields.description}
          className={
            `border rounded-lg border-secondary p-1.5 h-80 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none ` +
            (errorDescription && "border-red-600 focus:outline-red-400")
          }
          maxLength={600}
        />
        <p className="px-1.5 h-4 text-xs text-red-600">{errorDescription}</p>
      </div>
    </>
  );
};

export default BasicInputs;
