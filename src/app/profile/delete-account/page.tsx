"use client";
import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

import { signOut } from "@/services/auth.service";
import { deleteUser } from "@/services/users.service";
import useVelmarContext from "@/hooks/useVelmarContext";

const DeleteAccount = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { setIsAuth } = useVelmarContext();

  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteUser();
      await signOut();
      router.push("/");
      setIsAuth(false);
    } catch (error) {
      setErrorMsg("An error occurred, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-center text-secondary">
      <h2 className="text-2xl font-semibold">Account Deletion Confirmation</h2>

      <p>Are you sure you want to delete your account?</p>

      <p>
        This action is irreversible, and you will not be able to recover your
        account or the associated information.
      </p>

      <div className="flex flex-wrap gap-3 xsm:gap-6 justify-center">
        <button
          title="Delete account"
          type="button"
          disabled={loading}
          onClick={handleDelete}
          className={
            "p-3 mt-4 w-36 text-primary bg-red-600 " +
            (loading
              ? "cursor-not-allowed opacity-70"
              : "hover:bg-body hover:text-secondary hover:scale-105 duration-150")
          }
        >
          Delete account
        </button>
        <button
          title="Cancel"
          type="button"
          onClick={handleCancel}
          className="p-3 mt-4 w-36 text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
        >
          Cancel
        </button>
      </div>

      <p className="flex items-center justify-center gap-1 mb-4 min-h-5 text-sm sm:text-base text-red-600">
        {errorMsg && (
          <>
            <MdErrorOutline /> {errorMsg}
          </>
        )}
      </p>
    </div>
  );
};

export default DeleteAccount;
