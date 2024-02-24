import { Dispatch, SetStateAction } from "react";

interface Field {
  label: string;
  type: string;
  value: string;
  hasError: string;
}

const validateForm = ({
  formFields,
  setFormFields,
}: {
  formFields: Field[];
  setFormFields: Dispatch<SetStateAction<Field[]>>;
}) => {
  const isFormValid = formFields.every((field) => field.value.trim() !== "");

  if (!isFormValid) {
    const updatedFields = formFields.map((field) => {
      const isOptional = field.label === "Address" || field.label === "Phone";
      if (field.label === "Email" && field.value.trim() !== "") {
        const isValidateEmail = validateEmail(field.value);
        if (!isValidateEmail) {
          return {
            ...field,
            hasError: "The email address format is invalid. It should be in the format yourname@example.com",
          };
        }
      }

      if (field.label === "Username" && field.value.trim() !== "") {
        const isValidateUsername = validateUsername(field.value);
        if (!isValidateUsername) {
          return {
            ...field,
            hasError: "The username can only contain letters, numbers, underscores (_), and hyphens (-)",
          };
        }
      }

      if (field.label === "Password" && field.value.trim() !== "") {
        const isValidatePassword = validatePassword(field.value);
        if (!isValidatePassword) {
          return {
            ...field,
            hasError: "The password must be at least 6 characters",
          };
        }
      }

      if (field.label === "Confirm password" && field.value.trim() !== "") {
        const password = formFields.find((field) => field.label === "password")?.value || "";
        const isMatchPasswords = validateConfirmPassword(password, field.value);
        if (!isMatchPasswords) {
          return {
            ...field,
            hasError: "Password does not match",
          };
        }
      }
      return {
        ...field,
        hasError:
          field.value.trim() === "" && !isOptional
            ? "Please complete this field"
            : "",
      };
    });
    setFormFields(updatedFields);
    return;
  }
};

export default validateForm;

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/^[a-zA-Z0-9_-]+$/;

const validateUsername = (username: string) => {
  const regex = /^[a-zA-Z0-9_-]+$/;
  return regex.test(username);
};

const validatePassword = (password: string) => {
  const isValid = password.length > 5;
  return isValid;
}

const validateConfirmPassword = (password: string, confirmPassword: string) => {
  const isMatch = password === confirmPassword;
  return isMatch;
}
