import React from "react";
import Link from "next/link";

interface IEmailSent {
  handleEmailSent: () => void;
}

const EmailSent: React.FC<IEmailSent> = ({ handleEmailSent }) => {
  return (
    <div className="flex flex-col justify-center gap-2 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-24 rounded-lg shadow-md w-500p bg-primary text-secondary">
      <h2 className="text-2xl font-semibold"> Password Reset Email Sent</h2>
      <br />
      <p>
        We have sent you an email with instructions to reset your password.
        Please check your inbox and follow the link provided in the email to
        reset your password.
      </p>
      <br />
      <p>
        If you do not receive the email within a few minutes, please check your
        spam or junk folder. If you still do not receive the email, you can
        request another password reset{" "}
        <span
          onClick={handleEmailSent}
          className="font-medium underline cursor-pointer"
        >
          here
        </span>
        .
      </p>
      <br />
      <p>If you need further assistance, please feel free to contact us.</p>

      <div className="flex items-center gap-2 flex-wrap mt-4">
        <p className="text-gray-400 text-sm font-medium">
          Do you want to log in?
        </p>
        <Link href="/sign-in" className="text-sm font-medium hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default EmailSent;
