import React from "react";
import Troll from "./Troll.png";
function header() {
  return (
    <div
      style={{
        backgroundColor: "#7d0c99",
        width: "100%",
        margin: "auto",
      }}
    >
      <img src={Troll} style={{ height: 80, width: 80, marginLeft: 10 }} />
      <span
        style={{
          color: "white",
          fontSize: 60,
          float: "right",
          marginRight: 10,
        }}
      >
        <b>Meme Generator</b>
      </span>
    </div>
  );
}
export default header;
