import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleFormData = (event) => {
    event.preventDefault();
    console.log(event.target);
    let form = event.target;
    let formData = new FormData(form);
    console.log(formData);
    let formObject = Object.fromEntries(formData);
    console.log(formObject);
  };
  return (
    <>
      <form onSubmit={handleFormData}>
        <div>
          <input type="text" name="name" placeholder="Enter Name" />
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div>
          <select name="gender" id="">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="">Country : </label>
          <input type="radio" name="country" id="" value="india" />
          India
          <input type="radio" name="country" id="" value="usa" />
          USA
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;


