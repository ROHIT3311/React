import React from "react";
import useGoBack from "./useGoBack";

const GoBackPage = () => {
  const goBack = useGoBack(1);
  return (
    <div>
      <button onClick={goBack}> Click</button>
    </div>
  );
};

export default GoBackPage;
