"use client";
import React from "react";

import Form from "@/components/Form";
import { IUser } from "@/types/user";

const Data = ({ user }: { user: IUser }) => {
  const handleSubmit = (formData: any) => {
    console.log({ ...formData });
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Hi {user.fullname}
      </h1>

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
            value: user.fullname,
          },
          {
            label: "Email",
            type: "email",
            value: user.email,
          },
          {
            label: "Phone",
            type: "number",
            value: user.phone?.toString() || "",
            isOptional: true,
          },
          {
            label: "Address",
            type: "text",
            value: user.address || "",
            isOptional: true,
          },
        ]}
        onSubmit={(formData) => handleSubmit(formData)}
      />
    </div>
  );
};

export default Data;
