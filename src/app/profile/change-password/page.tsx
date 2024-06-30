"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineError } from "react-icons/md";

import Form from "@/components/Form";
import { updatePassword } from "@/services/users.service";
import { IPayloadUpdatePassword } from "@/types/user";

const ChangePassword = () => {
  const router = useRouter();

  const [error, setError] = useState<string>("");

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = async (formData: {
    "confirm password": string;
    "current password": string;
    "new password": string;
  }) => {
    try {
      const payload: IPayloadUpdatePassword = {
        password: formData["current password"],
        newPassword: formData["new password"],
      };
      await updatePassword(payload);
      router.push("/profile");
    } catch (error: any) {
      console.error(error);
      if (error?.response?.data?.message.includes("Incorrect password")) {
        setError("Incorrect current password");
      }
    }
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
        onSubmit={(formData) => handleSubmit(formData)}
      />


      <button
        type="button"
        title="Cancel"
        onClick={handleBack}
        className="p-3 hover:bg-body hover:scale-105 duration-150"
        >
        Cancel
      </button>
        { error && <div className="flex items-center gap-1 text-red-600"><MdOutlineError /> <p>{error}</p></div> }
    </div>
  );
};

export default ChangePassword;
