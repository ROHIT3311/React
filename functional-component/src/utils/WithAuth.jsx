import React from "react";

function WithAuth(Component) {
  const isAuthenticated = true; // This should ideally come from context or props

  return function AuthComponent(props) {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <p>Please login</p>;
    }
  };
}

export default WithAuth;
