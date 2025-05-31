import { useRef } from "react";

export default function UseRef() {
  const InitialData = {
    username: "John",
    mob: 8600972231,
  };

  const inputRef = useRef(InitialData);

  console.log(inputRef.current);
  console.log("Component Re-render");
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    inputRef.current = {
      ...inputRef.current,
      [name]: value,
    };

    console.log("ref rendered", inputRef.current);
  };
  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            name="username"
            id=""
            placeholder="User Name"
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="mobile"
            id=""
            placeholder="Mobile No"
            onChange={handleOnChange}
          />
          <button type="submit">Submit Details</button>
        </form>
      </div>
    </>
  );
}
