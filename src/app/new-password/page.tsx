"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { decode } from "jsonwebtoken";

import Form from "@/components/Form";
import { newPassord } from "@/services/auth.service";
import { INewPassword } from "@/types/auth";
import TokenExpired from "./components/TokenExpired";
import TokenAlreadyUsed from "./components/TokenAlreadyUsed";

const NewPasswordPage = () => {
  const router = useRouter();

  const queryParams = useSearchParams();
  const token = queryParams.get("token") || "";

  const decoded: any = decode(token);
  const currentTime = Math.floor(Date.now() / 1000);

  const [isExpired, setIsExpired] = useState<boolean>(
    decoded.exp < currentTime
  );
  const [isAlreadyUsed, setIsAlreadyUsed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (formData: {
    "new password": string;
    "confirm password": string;
  }) => {
    try {
      setLoading(true);

      const payload: INewPassword = {
        newPassword: formData["new password"],
        token,
      };

      await newPassord(payload);
      router.replace("/sign-in");
    } catch (error: any) {
      if (error.response.data.message === "Token expired") {
        setIsExpired(true);
      } else if (error.response.data.message === "Token already used") {
        setIsAlreadyUsed(true);
      } else {
        console.error(error);
        throw error;
      }
    } finally {
      setLoading(false);
    }
  };

  if (isExpired) {
    return <TokenExpired />;
  }

  if (isAlreadyUsed) {
    return <TokenAlreadyUsed />;
  }

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Change your password
      </h1>
      <Form
        buttonText="Save"
        fields={[
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
        loading={loading}
      />
    </div>
  );
};

export default NewPasswordPage;
