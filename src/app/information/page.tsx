"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import useVelmarContext from "@/hooks/useVelmarContext";

const InformationPage = () => {
  const { addressValue } = useVelmarContext();

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/payment");
  }

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">Add your information</h2>
      <Form
        buttonText="Confirm"
        fields={[
          {
            label: "Address",
            type: "text",
            value: addressValue,
            isOptional: true,
          },
          {
            label: "Phone",
            type: "number",
            value: "",
            isOptional: true,
          },
        ]}
        onSubmit={handleSubmit}
        page="information"
      />
    </div>
  );
};

export default InformationPage;