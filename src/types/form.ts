export interface IField {
  label: string;
  type: string;
  value: any;
  isOptional?: boolean;
  hasError?: string;
}

export interface FormProps {
  onSubmit: (formData: any) => void;
  buttonText: string;
  fields: IField[];
  dropdown?: { label: string; options: string[] };
  page?: string;
  loading?: boolean;
}
