"use client";
import React, { useState } from "react";

import { signOut } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import useVelmarContext from "@/hooks/useVelmarContext";

const SignOutPage = () => {
  const [error, setError] = useState<string>("");

  const { setIsAuth, setRoleUser } = useVelmarContext();

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsAuth(false);
      setRoleUser(null);
      router.push("/");
    } catch (error) {
      console.error(error);
      setError("There's been a problem. Please try again later");
    }
  };

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col justify-evenly p-4 sm:p-8 m-4 h-96 bg-primary rounded-lg text-center">
      <h2 className="text-2xl font-bold text-secondary">
        You are about to log out!
      </h2>
      <div className="mt-4">
        <h2 className="text-lg text-secondary">
          Are you sure you want to do it?
        </h2>

        <div className="flex justify-evenly mt-2">
          <button
            type="button"
            title="Yes"
            className="p-3 mt-4 w-20 rounded-md shadow-md text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
            onClick={handleSignOut}
          >
            Yes
          </button>
          <button
            type="button"
            title="No"
            className="p-3 mt-4 w-20 rounded-md shadow-md text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
            onClick={handleBack}
          >
            No
          </button>
        </div>
      </div>

      <p className="min-h-5 text-sm sm:text-base text-red-600">{error}</p>
      <p className="text-gray-400 text-sm">
        Remember that you can always come back!
      </p>
    </div>
  );
};

export default SignOutPage;
