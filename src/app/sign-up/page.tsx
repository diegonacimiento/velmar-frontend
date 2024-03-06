"use client";
import React from "react";
import Link from "next/link";

import Form from "@/components/Form";
import useVelmarContext from "@/hooks/useVelmarContext";

const SignUp = () => {
  const { addressValue } = useVelmarContext();

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">Create an account</h2>
      <Form
        buttonText="Create"
        fields={[
          {
            label: "Username",
            type: "text",
            value: "",
          },
          {
            label: "Fullname",
            type: "text",
            value: "",
          },
          {
            label: "Email",
            type: "email",
            value: "",
          },
          {
            label: "Password",
            type: "password",
            value: "",
          },
          {
            label: "Confirm password",
            type: "password",
            value: "",
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
        dropdown={{ label: "Role", options: ["Customer", "Seller"] }}
        onSubmit={(dataForm) => console.log(dataForm)}
      />

      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-gray-400 text-sm font-medium">
          Already have an account?
        </p>

        <Link href="/sign-in" className="text-sm font-medium hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
