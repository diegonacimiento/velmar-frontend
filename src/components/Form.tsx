"use client";
import React, { useState } from "react";

interface Field {
  label: string;
  type: string;
  value: string;
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
    setFormFields(updatedFields);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: any = {};
    fields.forEach((field) => {
      formData[field.label.toLowerCase()] = field.value;
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
      {formFields.map((field, index) => (
        <div key={field.label} className="flex flex-col">
          <label className="text-sm font-light">
            {field.label +
              (field.label === "Phone" || field.label === "Adress"
                ? " (optional)"
                : "")}
          </label>
          <input
            name={field.label.toLowerCase()}
            type={field.type}
            value={field.value}
            onChange={(e) => handleFieldChange(index, e.currentTarget.value)}
            required={
              field.label === "Phone" || field.label === "Adress" ? false : true
            }
            className="border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-body"
            autoComplete={field.type === "password" ? "on" : "off"}
          />
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
