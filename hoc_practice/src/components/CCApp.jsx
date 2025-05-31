import { useState } from "react";

export default function CCApp({ abc }) {
  const [amount, setAmout] = useState();

  const insertValue = (event) => {
    setAmout(event.target.value);
  };

  return (
    <>
      <input type="number" placeholder="Enter Amount" onChange={insertValue} />

      <div>{abc(amount)}</div>
    </>
  );
}
