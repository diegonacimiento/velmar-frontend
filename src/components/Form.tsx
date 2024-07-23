"use client";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import validateForm from "@/utils/validate-form";
import { IField, FormProps } from "@/types/form";
import Loading from "./Loading";
import { addressToString, copyData } from "@/utils/functions-share";
import SetAddress from "./SetAddress";

const Form: React.FC<FormProps> = ({
  onSubmit,
  buttonText,
  fields,
  dropdown,
  page,
  loading,
}) => {
  const [formFields, setFormFields] = useState<IField[]>(copyData(fields));
  const [openSetAddress, setOpenSetAddress] = useState<boolean>(false);

  let showPasswordList: { [keyof: string]: boolean } = {};

  for (const field of fields) {
    if (field.type === "password") {
      showPasswordList[`${field.label}`] = false;
    }
  }

  const [showPassword, setShowPassword] = useState(showPasswordList);

  const toggleShowPassword = (type: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const toogleSetAddress = () => {
    setOpenSetAddress((prev) => !prev);
  };

  const handleFieldChange = (index: number, value: string) => {
    const updatedFields = [...formFields];
    const updatedField = { ...updatedFields[index], value };
    updatedFields[index] = updatedField;
    updatedFields[index].hasError = "";
    setFormFields(updatedFields);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const noChanges = formFields.every((field, index) => {
      const isOptional = field.isOptional;
      if (field.label === "Address") {
        const currentAddress = addressToString(field.value);
        return (
          currentAddress === addressToString(fields[index].value) &&
          (currentAddress !== "" || isOptional)
        );
      }
      return (
        field.value === fields[index].value &&
        (field.value !== "" || isOptional)
      );
    });

    if (noChanges && page !== "information") {
      return;
    }

    const isFormValid = validateForm({
      formFields,
      setFormFields,
    });

    if (isFormValid) {
      const formData: any = {};
      formFields.forEach((field) => {
        formData[field.label.toLowerCase()] = field.value;
      });

      onSubmit(formData);
    }
  };

  if (openSetAddress)
    return (
      <SetAddress
        formFields={formFields}
        handleFieldChange={handleFieldChange}
        toogleSetAddress={toogleSetAddress}
      />
    );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
      {formFields.map((field, index) => (
        <div key={field.label} className="flex flex-col">
          <label
            htmlFor={`input-${field.label.toLowerCase()}`}
            className={`px-1 text-sm font-light ${
              field.hasError ? "input-error" : ""
            }`}
          >
            {field.label + (field.isOptional ? " (optional)" : "")}
          </label>

          {field.label === "Address" ? (
            <input
              id={`input-${field.label.toLowerCase()}`}
              readOnly={true}
              name={field.label.toLowerCase()}
              type={field.type}
              value={addressToString(field.value)}
              onChange={(e) => handleFieldChange(index, e.currentTarget.value)}
              onClick={toogleSetAddress}
              autoComplete="on"
              className={`border rounded-lg border-secondary p-1.5 my-1 w-full cursor-pointer focus:outline-offset-1 focus:outline-1 focus:outline-body ${
                field.hasError ? "input-error" : ""
              }`}
            />
          ) : (
            <div className="relative flex items-center">
              <input
                id={`input-${field.label.toLowerCase()}`}
                name={field.label.toLowerCase()}
                type={
                  field.type === "password"
                    ? showPassword[field.label]
                      ? "text"
                      : field.type
                    : field.type
                }
                value={
                  field.label === "Username" ? field.value.trim() : field.value
                }
                onChange={(e) =>
                  handleFieldChange(index, e.currentTarget.value)
                }
                className={`border rounded-lg border-secondary p-1.5 my-1 w-full focus:outline-offset-1 focus:outline-1 focus:outline-body ${
                  field.hasError ? "input-error" : ""
                }`}
                autoComplete={"on"}
              />
              {field.type === "password" &&
                (showPassword[field.label] ? (
                  <button
                    type="button"
                    title="Hide password"
                    onClick={() => toggleShowPassword(field.label)}
                    className="absolute right-4"
                  >
                    <FaRegEye />
                  </button>
                ) : (
                  <button
                    type="button"
                    title="Show password"
                    onClick={() => toggleShowPassword(field.label)}
                    className="absolute right-4"
                  >
                    <FaRegEyeSlash />
                  </button>
                ))}
            </div>
          )}

          <p className="px-1 min-h-4 text-justify text-xs text-red-600">
            {field.hasError}
          </p>
        </div>
      ))}
      {dropdown && (
        <div className="flex flex-col">
          <label className="text-sm font-light">{dropdown.label}</label>
          <select className="px-1.5 py-2 my-1 border border-secondary rounded-lg focus:outline-0">
            {dropdown.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      <button
        type={loading ? "button" : "submit"}
        title={buttonText}
        disabled={loading}
        className={
          "p-3 mt-4 text-primary bg-secondary " +
          (loading
            ? "cursor-not-allowed opacity-70"
            : "hover:bg-body hover:text-secondary hover:scale-105 duration-150")
        }
      >
        {loading ? <Loading /> : buttonText}
      </button>
    </form>
  );
};

export default Form;
