import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-24 rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-2xl font-semibold">Sign in to your account</h2>
      <form action="" className="flex flex-col gap-4 my-4">
        <div className="flex flex-col">
          <span className="text-sm font-light">Your email</span>
          <input
            type="email"
            className="border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-0 focus:outline-1 focus:outline-body"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-light">Password</span>
          <input
            type="password"
            className="border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-body"
          />
        </div>

        <div className="flex flex-wrap justify-between px-1 sm:px-2">
          <div className="flex items-center gap-1">
            <input
              id="renember"
              type="checkbox"
              aria-describedby="renember"
              className="border border-secondary rounded bg-secondary focus:ring-1 focus:bg-secondary w-4 h-4"
            />
            <label htmlFor="renember" className="text-sm">
              Renember me
            </label>
          </div>

          <Link href="/" className="text-secondary text-sm font-medium hover:underline">
            Forgot password
          </Link>
        </div>

        <button
          type="button"
          title="Sign in"
          className="p-3 mt-4 w-30 text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
        >
          Sign in
        </button>

        <div className="flex items-center gap-2 flex-wrap mt-4">
          <p className="text-gray-400 text-sm font-medium">Don’t have an account yet?</p>
          
          <Link href="/" className="text-sm font-medium hover:underline">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
