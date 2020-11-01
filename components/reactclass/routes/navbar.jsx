import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* <a href="/">Home</a> */}
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <Link to="/posts/2020/08">Posts</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </Router>
  );
};

export default NavBar;
