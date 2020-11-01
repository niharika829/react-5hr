import React from "react";
import { Link } from "react-router-dom";
function nav() {
  return (
    <ul>
      <Link to="/about">
        <li>about</li>
      </Link>
      <Link to="/shop">
        <li>shop</li>
      </Link>
    </ul>
  );
}

export default nav;
