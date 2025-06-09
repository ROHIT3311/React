import React from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const match = useMatch("/userDetails/1");
  if (match) {
    console.log("Matched");
  }
  console.log(match);
  console.log(location);
  console.log(id);
  return <div>UserDetails</div>;
};

export default UserDetails;
