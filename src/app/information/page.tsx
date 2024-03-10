"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const InformationPage = () => {

  const router = useRouter();

  const handleSubmit = () => {
    console.log("Info confirmada")
    router.push("/payment");
  }

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">Add your information</h2>
      <Form
        buttonText="Confirm"
        fields={[
          {
            label: "Fullname",
            type: "text",
            value: "Diego Nacimiento",
          },
          {
            label: "Email",
            type: "email",
            value: "diegonacimiento18@gmail.com",
          },
          {
            label: "Address",
            type: "text",
            value: "",
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
