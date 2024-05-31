"use client";
import React, { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import { IPayloadUpdateUser, IUser } from "@/types/user";
import { preparePayload } from "./utils/functions-form";
import { updateUser } from "@/services/users.service";

const Data = ({ user }: { user: IUser }) => {
  const router = useRouter();

  const [error, setError] = useState<string>("");

  const handleSubmit = async (formData: IPayloadUpdateUser) => {
    const payload = preparePayload(user, formData);
    console.log(payload);
    try {
      await updateUser(payload);
      router.refresh();
    } catch (error) {
      setError("An error occurred, please try again");
    }
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
            value: user.phone || "",
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

      <p className="flex justify-center items-center gap-1 px-1 min-h-4 text-center text-red-600">
        {error && (
          <>
            <MdOutlineError />
            {error}
          </>
        )}
      </p>
    </div>
  );
};

export default Data;
