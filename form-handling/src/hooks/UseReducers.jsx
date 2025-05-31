import { useReducer } from "react";

const InitialState = {
  username: "",
  mobile: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };

    case "reset":
      return InitialState;
    default:
      return state;
  }
}

export default function UseReducer() {
  console.log("Component Re-render");

  const [state, dispatch] = useReducer(reducer, InitialState);

  const handleOnChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
  };

  console.log(state);
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
          <button type="submit" onClick={() => dispatch({ type: "reset" })}>
            Submit Details
          </button>
        </form>
      </div>
    </>
  );
}
