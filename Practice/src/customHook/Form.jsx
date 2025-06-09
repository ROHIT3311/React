import React from "react";
import useForm from "./useForm";

const Form = () => {
  const { formData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.value}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.value}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
