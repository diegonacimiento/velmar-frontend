"use client"
import Form from "@/components/Form";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-xl sm:text-2x font-semibold">Create an account</h2>
      <Form
        buttonText="Create"
        fields={[
          {
            label: "Username",
            type: "text",
            value: "",
          },
          {
           label: "Fullname",
           type: "text",
           value: "",
         },
          {
           label: "Email",
           type: "email",
           value: "",
         },
         {
          label: "Password",
          type: "password",
          value: "",
        },
        {
         label: "Confirm password",
         type: "password",
         value: "",
       },
       {
        label: "Phone",
        type: "text",
        value: "",
      },
      {
       label: "Adress",
       type: "text",
       value: "",
     },
        ]}
        dropdown={{label: "Role", options: ["Customer", "Seller"]}}
        onSubmit={(dataForm) => console.log(dataForm)}
      />
    </div>
  );
};

export default SignUp;
