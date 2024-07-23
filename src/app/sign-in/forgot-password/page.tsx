"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdErrorOutline } from "react-icons/md";

import Form from "@/components/Form";
import { forgotPassword } from "@/services/auth.service";
import EmailSent from "./components/EmailSent";

const ForgotPassword = () => {
  const router = useRouter();

  const [error, setError] = useState<string>("");
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleBack = () => {
    router.push("/sign-in");
  };

  const handleEmailSent = () => {
    setEmailSent(false);
  };

  const handleSubmit = async (formData: { email: string }) => {
    try {
      setLoading(true);
      setEmailSent(false);
      setError("");
      await forgotPassword(formData.email);
      setEmailSent(true);
    } catch (error) {
      setError("A problem occurred, try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return <EmailSent handleEmailSent={handleEmailSent} />;
  }

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-24 rounded-lg shadow-md w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">Forgot password</h2>
      <h5 className="text-sm sm:text-base font-light">
        We will send you a link to your email so you can change your password
      </h5>
      <Form
        buttonText="Send"
        fields={[{ label: "Email", type: "email", value: "", hasError: error }]}
        onSubmit={(formData) => handleSubmit(formData)}
        loading={loading}
      />
      <button
        type="button"
        title="Cancel"
        onClick={handleBack}
        className="p-3 hover:bg-body hover:scale-105 duration-150"
      >
        Cancel
      </button>

      <p
        className={
          "flex items-center justify-center gap-1 min-h-5 text-sm sm:text-base " +
          (error && "text-red-600 ") +
          (emailSent && "text-green-800")
        }
      >
        {error && (
          <>
            <MdErrorOutline /> {error}
          </>
        )}
      </p>

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
