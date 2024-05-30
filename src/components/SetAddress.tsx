"use client";
import React from "react";

import Form from "@/components/Form";
import { IField } from "@/types/form";

interface ISetAddress {
  formFields: IField[];
  toogleSetAddress: () => void;
  handleFieldChange: (index: number, value: string) => void;
}

const SetAddress: React.FC<ISetAddress> = ({
  formFields,
  toogleSetAddress,
  handleFieldChange,
}) => {
  const index = formFields.findIndex((field) => field.label === "Address");

  const addressToArray = formFields[index].value.split(", ");

  if (addressToArray.length === 4) {
    addressToArray.splice(1, 0, "");
  }

  const handleBack = () => {
    toogleSetAddress();
  };

  const handleSubmit = (dataForm: any) => {
    const addresses: string[] = Object.values(dataForm);

    const addressesNoGaps = addresses
      .map((address) => address.trim())
      .filter((element, index) => {
        if (index === 1) {
          return parseInt(element) > 0;
        }
        return element !== "";
      });

    const addressComplete = addressesNoGaps.join(", ");

    handleFieldChange(index, addressComplete);

    toogleSetAddress();
  };

  return (
    <div>
      <h2 className="text-lg">Set your address</h2>
      <Form
        buttonText="Save"
        fields={[
          {
            label: "Street",
            type: "text",
            value: addressToArray[0] || "",
            isOptional: true,
          },
          {
            label: "Apartment",
            type: "number",
            value: addressToArray[1] || "",
            isOptional: true,
          },
          {
            label: "City",
            type: "text",
            value: addressToArray[2] || "",
            isOptional: true,
          },
          {
            label: "State",
            type: "text",
            value: addressToArray[3] || "",
            isOptional: true,
          },
          {
            label: "Country",
            type: "text",
            value: addressToArray[4] || "",
            isOptional: true,
          },
        ]}
        onSubmit={(dataForm) => handleSubmit(dataForm)}
      />

      <button
        type="button"
        title="Cancel"
        onClick={handleBack}
        className="p-3 hover:bg-body hover:scale-105 duration-150 text-center"
      >
        Cancel
      </button>
    </div>
  );
};

export default SetAddress;
