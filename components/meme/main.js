import React from "react";
import Header from "./header.js";
import Generator from "./memegenerator";
import Jumbotron from "react-bootstrap/Jumbotron";
function main() {
  return (
    <Jumbotron style={{ margin: "auto", width: "50%", marginTop: 20 }}>
      <Header />
      <Generator />
    </Jumbotron>
  );
}
export default main;
