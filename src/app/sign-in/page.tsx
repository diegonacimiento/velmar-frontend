"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import { AuthService } from "@/services/auth.service";

const authService = new AuthService();

const SignIn = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (formData: any) => {
    try {
      setError("");
      setLoading(true);
      await authService.signIn(formData);
      router.push("/");
    } catch (err: any) {
      setLoading(false);
      console.error(err);
      if (err.response?.status === 401) {
        setError("Email or password incorrect");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-24 rounded-lg shadow-md w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">
        Sign in to your account
      </h2>

      <Form
        buttonText="Sign in"
        fields={[
          {
            label: "Your email",
            type: "email",
            value: "",
          },
          {
            label: "Your password",
            type: "password",
            value: "",
          },
        ]}
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

      <Link
        href="sign-in/forgot-password"
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
