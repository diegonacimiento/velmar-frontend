"use client";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { MdErrorOutline } from "react-icons/md";

import Form from "@/components/Form";
import useVelmarContext from "@/hooks/useVelmarContext";
import { ROLE } from "@/types/user";
import { IFormDataCreateUser, preparedPayload } from "./utils/utils";
import { createUser } from "@/services/users.service";
import { signIn } from "@/services/auth.service";

const SignUp = () => {
  const { addressValue, isAuth, setIsAuth, setRoleUser } = useVelmarContext();

  const router = useRouter();

  useLayoutEffect(() => {
    if (isAuth) {
      redirect("/");
    }
  }, [isAuth]);

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (formData: IFormDataCreateUser) => {
    try {
      setError("");
      setLoading(true);
      const payload = preparedPayload(formData);
      await createUser(payload);
      const response = await signIn({
        "your email": payload.email,
        "your password": payload.password,
      });
      setIsAuth(true);
      setRoleUser(response.role);
      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.error(error);
      if (
        error?.response?.data?.message.includes(
          `Key (username)=(${formData.username}) already exists.`
        )
      ) {
        setError("Username not available. Please try another one.");
      }
      if (
        error?.response?.data?.message.includes(
          `Key (email)=(${formData.email}) already exists.`
        )
      ) {
        setError("Email not available. Please try another one.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

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
        dropdown={{ label: "Role", options: [ROLE.CUSTOMER, ROLE.SALESPERSON] }}
        onSubmit={(dataForm) => handleSubmit(dataForm)}
        loading={loading}
      />

      <p className="flex items-center gap-1 mb-4 min-h-5 text-sm sm:text-base text-red-600">
        {error && (
          <>
            <MdErrorOutline /> {error}
          </>
        )}
      </p>

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
