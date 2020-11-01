import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <React.Fragment>
        <div>
          <button onClick={() => loginWithRedirect()}>login</button>
        </div>
      </React.Fragment>
    )
  );
};

export default LoginButton;
