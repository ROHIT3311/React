import { useState } from "react";

export default function useForm(initalValue) {
  const [formData, setFormData] = useState(initalValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return { formData, handleChange, handleSubmit };
}
