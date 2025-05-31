import React, { useActionState } from "react";

const UseActionState = () => {
  const action = async (prevState, formData) => {
    console.log(formData.get("username"));
    const username = formData.get("username");

    if (username.length < 3) {
      return {
        success: false,
        message: "Username should have length greater than 3",
      };
    }

    return {
      success: true,
      message: "username is correct",
    };
  };
  const [state, formAction] = useActionState(action, undefined);

  return (
    <>
      <form action={formAction}>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
      {state && <p>{state.message}</p>}
      {action.message}
    </>
  );
};

export default UseActionState;
