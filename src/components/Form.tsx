"use client";
import React, { useState } from "react";

import validateForm from "@/utils/validate-form";

interface Field {
  label: string;
  type: string;
  value: string;
  hasError: string;
}

interface FormProps {
  onSubmit: (formData: any) => void;
  buttonText: string;
  fields: Field[];
  dropdown?: { label: string; options: string[] };
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  buttonText,
  fields,
  dropdown,
}) => {
  const [formFields, setFormFields] = useState<Field[]>(fields);

  const handleFieldChange = (index: number, value: string) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = value;
    updatedFields[index].hasError = "";
    setFormFields(updatedFields);
  };

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    validateForm({ formFields, setFormFields });

    const formData: any = {};
    fields.forEach((field) => {
      formData[field.label.toLowerCase()] = field.value;
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
      {formFields.map((field, index) => (
        <div key={field.label} className="flex flex-col">
          <label
            className={`px-1 text-sm font-light ${
              field.hasError ? "input-error" : ""
            }`}
          >
            {field.label +
              (field.label === "Phone" || field.label === "Address"
                ? " (optional)"
                : "")}
          </label>
          <input
            name={field.label.toLowerCase()}
            type={field.type}
            value={field.value}
            onChange={(e) => handleFieldChange(index, e.currentTarget.value)}
            // required={
            //   field.label === "Phone" || field.label === "Adress" ? false : true
            // }
            className={`border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-body ${
              field.hasError ? "input-error" : ""
            }`}
            autoComplete={field.type === "password" ? "on" : "off"}
          />
          <p className="px-1 min-h-4 text-justify text-xs text-red-600">{field.hasError}</p>
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
        type="submit"
        title={buttonText}
        className="p-3 mt-4 w-30 text-primary bg-secondary hover:bg-body hover:text-secondary hover:scale-105 duration-150"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
