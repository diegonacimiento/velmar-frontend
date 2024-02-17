"use client";
import Form from "@/components/Form";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-24 rounded-lg shadow-md w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">
        Sign in to your account
      </h2>

      <Form
        buttonText="Sign in"
        fields={[
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
        ]}
        onSubmit={(dataForm) => console.log(dataForm)}
      />

      <Link
        href="/"
        className="text-secondary text-sm font-medium hover:underline"
      >
        Forgot password
      </Link>

      <div className="flex items-center gap-2 flex-wrap mt-4">
        <p className="text-gray-400 text-sm font-medium">
          Don’t have an account yet?
        </p>

        <Link href="/sign-up" className="text-sm font-medium hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
