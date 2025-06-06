import React from "react";

const Child = ({ val }) => {
  console.log("Child render");
  return (
    <div>
      <p>Child</p>
      {/* <p>{val.id}</p> */}
    </div>
  );
};

export default React.memo(Child);
