import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logoutbutton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <React.Fragment>
        <button onClick={() => logout()}>logout</button>{" "}
      </React.Fragment>
    )
  );
};

export default Logoutbutton;
