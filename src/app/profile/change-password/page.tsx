"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const ChangePassword = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Change your password
      </h1>
      <Form
        buttonText="Save"
        fields={[
          {
            label: "Current password",
            type: "password",
            value: "",
          },
          {
            label: "New password",
            type: "password",
            value: "",
          },
          {
            label: "Confirm password",
            type: "password",
            value: "",
          },
        ]}
        onSubmit={() => console.log("Password changed")}
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

export default ChangePassword;
