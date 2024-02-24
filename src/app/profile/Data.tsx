"use client";

import Form from "@/components/Form";
import React from "react";

const Data = ({ user }: { user: any }) => {
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
          },
          {
            label: "Address",
            type: "text",
            value: user.address.street,
          },
        ]}
        onSubmit={(formData) => console.log(formData)}
      />
    </div>
  );
};

export default Data;
