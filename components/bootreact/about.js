import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const About = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <h1>about page</h1>
      </div>
    )
  );
};

export default About;
