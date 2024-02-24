export interface Field {
 label: string;
 type: string;
 value: string;
 hasError?: string;
}

export interface FormProps {
 onSubmit: (formData: any) => void;
 buttonText: string;
 fields: Field[];
 dropdown?: { label: string; options: string[] };
}