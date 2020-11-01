import React from "react";
import { Link } from "react-router-dom";
function header() {
  return (
    <div>
      <h1>todolist</h1>
      <Link to="/">home</Link> | <Link to="/about">about</Link>
    </div>
  );
}

export default header;
