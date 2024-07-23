import React from "react";
import Link from "next/link";

const TokenExpired = () => {
  return (
    <div className="flex flex-col justify-center gap-2 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-2xl font-semibold">Token Expired</h2>
      <br />
      <p>
        The link you used to reset your password has expired. For security
        reasons, password reset links are only valid for a limited time.
      </p>
      <br />
      <p>
        To receive a new password reset link, please visit our password recovery
        page{" "}
        <Link href="/sign-in/forgot-password" className="font-medium underline">
          here
        </Link>
        .
      </p>
      <br />
      <p>
        If you need further assistance, please feel free to contact us.
      </p>{" "}
    </div>
  );
};

export default TokenExpired;
