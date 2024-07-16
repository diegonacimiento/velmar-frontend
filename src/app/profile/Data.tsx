"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineError } from "react-icons/md";

import Form from "@/components/Form";
import { IPayloadUpdateUser, IUser } from "@/types/user";
import { preparePayload } from "./utils/functions-form";
import { updateUser } from "@/services/users.service";
import { FaCheck } from "react-icons/fa";

interface IData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const Data: React.FC<IData> = ({ user, setUser }) => {
  const [error, setError] = useState<string>("");
  const [msgSuccess, setMsgSuccess] = useState<string>("");

  const handleSubmit = async (formData: IPayloadUpdateUser) => {
    const payload = preparePayload(user, formData);
    setMsgSuccess("");
    setError("");

    try {
      await updateUser(payload);
      setUser((prev) => ({ ...prev, ...payload }));
      setMsgSuccess("Updated profile");
    } catch (error) {
      setError("An error occurred, please try again");
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Hi {user.fullname}
      </h1>

      <Form
        buttonText="Save"
        fields={[
          {
            label: "Username",
            type: "text",
            value: user.username,
          },
          {
            label: "Fullname",
            type: "text",
            value: user.fullname,
          },
          {
            label: "Email",
            type: "email",
            value: user.email,
          },
          {
            label: "Phone",
            type: "number",
            value: user.phone || "",
            isOptional: true,
          },
          {
            label: "Address",
            type: "text",
            value: user.address || "",
            isOptional: true,
          },
        ]}
        onSubmit={(formData) => handleSubmit(formData)}
      />

      <p
        className={
          "flex justify-center items-center gap-1 px-1 min-h-4 text-center " +
          (error && "text-red-600 ") +
          (msgSuccess && " text-green-800")
        }
      >
        {error && (
          <>
            <MdOutlineError />
            {error}
          </>
        )}
        {msgSuccess && (
          <>
            <FaCheck />
            {msgSuccess}
          </>
        )}
      </p>
    </div>
  );
};

export default Data;
