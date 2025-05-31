import { useState } from "react";

export default function UseState() {
  const [userDetails, setUserDetails] = useState({
    username: "John",
    mob: 8600972231,
  });

  console.log("Component Re-render");
  const handleOnChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(userDetails);

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
