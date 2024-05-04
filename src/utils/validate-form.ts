import { Dispatch, SetStateAction } from "react";

import { IField } from "@/types/form";

const validateForm = ({
  formFields,
  setFormFields,
}: {
  formFields: IField[];
  setFormFields: Dispatch<SetStateAction<IField[]>>;
}) => {
  const updatedFields = formFields.map((field) => {
    const isOptional = field.isOptional;

    if (field.value.trim() === "" && !isOptional) {
      return {
        ...field,
        hasError: "Please complete this field",
      };
    }

    if (field.label === "Email") {
      const isValidateEmail = validateEmail(field.value);
      return {
        ...field,
        hasError: !isValidateEmail
          ? "The email address format is invalid. It should be in the format yourname@example.com"
          : "",
      };
    }

    if (field.label === "Username") {
      const isValidateUsername = validateUsername(field.value);

      return {
        ...field,
        hasError: !isValidateUsername
          ? "The username can only contain letters, numbers, underscores (_), and hyphens (-)"
          : "",
      };
    }

    if (field.label === "Password" || field.label === "New password") {
      const isValidatePassword = validatePassword(field.value);

      return {
        ...field,
        hasError: !isValidatePassword
          ? "The password must be at least 6 characters"
          : "",
      };
    }

    if (field.label === "Confirm password") {
      const password =
        formFields.find(
          (field) =>
            field.label === "Password" || field.label === "New password"
        )?.value || "";
      const isMatchPasswords = validateConfirmPassword(password, field.value);

      return {
        ...field,
        hasError: !isMatchPasswords ? "Password does not match" : "",
      };
    }
    return {
      ...field,
      hasError: "",
    };
  });

  const isFormValid = updatedFields.every((field) => field.hasError === "");

  if (!isFormValid) {
    setFormFields(updatedFields);
    return false;
  }

  return true;
};

export default validateForm;

const validateEmail = (email: string) => {
  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regex.test(email);
};

const validateUsername = (username: string) => {
  const regex = /^[a-zA-Z0-9_-]+$/;
  return regex.test(username);
};

const validatePassword = (password: string) => {
  const isValid = password.length > 5;
  return isValid;
};

const validateConfirmPassword = (password: string, confirmPassword: string) => {
  const isMatch = password === confirmPassword;
  return isMatch;
};
