import React from "react";

const Header = (props) => {
  console.log("Header re-rendered", props);
  return <div>Header</div>;
};

export default React.memo(Header);
