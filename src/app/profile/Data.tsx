"use client";

import Form from "@/components/Form";
import useVelmarContext from "@/hooks/useVelmarContext";
import React from "react";

const Data = ({ user }: { user: any }) => {
  const { addressValue } = useVelmarContext();
  // const handleSubmit = (formData: any) => {
  // }
  return (
    <div>
      <Form
        buttonText="Save"
        fields={[
          {
            label: "Username",
            type: "text",
            value: user.username,
          },
          {
            label: "Fullname",
            type: "text",
            value: user.name,
          },
          {
            label: "Email",
            type: "email",
            value: user.email,
          },
          {
            label: "Phone",
            type: "number",
            value: "",
            isOptional: true,
          },
          {
            label: "Address",
            type: "text",
            value: addressValue,
            isOptional: true,
          },
        ]}
        onSubmit={(formData) => console.log(formData)}
      />
    </div>
  );
};

export default Data;
