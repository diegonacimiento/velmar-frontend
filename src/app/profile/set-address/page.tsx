"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import useVelmarContext from "@/hooks/useVelmarContext";

const SetAddress = () => {
  const { addressValue, updateAddressValue } = useVelmarContext();
  const router = useRouter();

  const addressToArray = addressValue.split(", ");

  if (addressToArray.length === 4) {
    addressToArray.splice(1, 0, "");
  }

  const handleBack = () => {
    router.back();
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

    updateAddressValue(addressComplete);

    router.back();
  };

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Set your address
      </h1>
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
        className="p-3 hover:bg-body hover:scale-105 duration-150"
      >
        Cancel
      </button>
    </div>
  );
};

export default SetAddress;
