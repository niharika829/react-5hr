import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <React.Fragment>
        <h2>user</h2>
        <img src={user.picture} alt={user.name} />
        <JSONPretty data={user} />
      </React.Fragment>
    )
  );
};
export default Profile;
