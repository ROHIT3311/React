import React, { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";

function Child() {
  const phone = useContext(PhoneContext);
  return (
    <>
      <h1>Child age : {phone}</h1>
    </>
  );
}

export default Child;
