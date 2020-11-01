import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./logoutbutton";
function Navbar() {
  //  const user = "Abby";
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link to="/">
            <span className="navbar-brand">React</span>
          </Link>
          <ul className="navbar-nav" style={{ marginLeft: "60%" }}>
            <Link to="/">
              <li className="nav-item active nav-link">Home</li>
            </Link>
            <Link to="/about">
              <li className="nav-item nav-link">about</li>
            </Link>
            <Link to="/cards">
              <li className="nav-item nav-link">cards</li>
            </Link>
            {/* <Link to={`/profile/${user}`}>
              <li className="nav-item nav-link">user profile</li>
    </Link>*/}
            <Logout />
          </ul>
        </nav>
      </React.Fragment>
    )
  );
}

export default Navbar;
