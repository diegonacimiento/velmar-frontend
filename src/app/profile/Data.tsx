"use client";

import Form from "@/components/Form";
import React from "react";

const Data = ({ user }: { user: any }) => {
  const handleSubmit = (formData: any) => {
   console.log(formData)
  }
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
            value: "3764997755",
          },
          {
            label: "Address",
            type: "text",
            value: user.address.street,
          },
        ]}
        onSubmit={(formData) => handleSubmit(formData)}
      />
    </div>
  );
};

export default Data;
