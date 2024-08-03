import React from "react";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-center gap-2 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-2xl font-semibold">Error server</h2>
      <br />
      <p>A problem occurred, please try again.</p>
      <br />
      <p>If it is not resolved, please contact support.</p>
    </div>
  );
};

export default ErrorMessage;
