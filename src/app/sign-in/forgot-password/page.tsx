"use client";
import React from "react";

import Form from "@/components/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-24 rounded-lg shadow-md w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">Forgot password</h2>
      <h5 className="text-sm sm:text-base font-light">
        We will send you a link to your email so you can change your password
      </h5>
      <Form
        buttonText="Send"
        fields={[{ label: "Email", type: "email", value: "" }]}
        onSubmit={() => console.log("Email enviado")}
      />
      <button
        type="button"
        title="Cancel"
        onClick={handleBack}
        className="p-3 hover:bg-body hover:scale-105 duration-150"
      >
        Cancel
      </button>
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

export default ForgotPassword;
