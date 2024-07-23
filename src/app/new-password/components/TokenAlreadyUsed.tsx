import React from "react";
import Link from "next/link";

const TokenAlreadyUsed = () => {
  return (
    <div className="flex flex-col justify-center gap-2 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-2xl font-semibold">Token already used</h2>
      <br />
      <p>
        It looks like the link you used to reset your password has already been
        used. For security reasons, each password reset link can only be used
        once.
      </p>
      <br />
      <p>
        To request a new password reset link, please visit our password recovery
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

export default TokenAlreadyUsed;
