"use client";
import React from "react";

import Form from "@/components/Form";
import { IField } from "@/types/form";
import { IAddress } from "@/types/user";

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

  const address: IAddress = formFields[index].value;

  const handleBack = () => {
    toogleSetAddress();
  };

  const handleSubmit = (dataForm: IAddress) => {
    const addresses: [string, string][] = Object.entries(dataForm);

    const addressesNoGaps = addresses
      .map((address) => [address[0], address[1].trim()])
      .filter((element) => {
        return element[1] !== "";
      });

    const addressFinal =
      addressesNoGaps.length > 0 ? Object.fromEntries(addressesNoGaps) : "";

    handleFieldChange(index, addressFinal);

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
            value: address.street || "",
            isOptional: true,
          },
          {
            label: "Apartment",
            type: "text",
            value: address.apartment || "",
            isOptional: true,
          },
          {
            label: "City",
            type: "text",
            value: address.city || "",
            isOptional: true,
          },
          {
            label: "State",
            type: "text",
            value: address.state || "",
            isOptional: true,
          },
          {
            label: "Country",
            type: "text",
            value: address.country || "",
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
