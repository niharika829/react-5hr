import React, { useState, useEffect } from "react";
import Axios from "axios";
import ParticlesBg from "particles-bg";
import Jumbotron from "react-bootstrap/Jumbotron";
function Number() {
  const [numValue, setNumValue] = useState(null);
  const [input, setInput] = useState("");
  const [data, setData] = useState("Hello, Enter A Number Here!");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get(`http://numbersapi.com/${numValue}`).then((result) => {
      setData(result.data);
      setLoading(false);
    });
  }, [numValue]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchNum = () => {
    setNumValue(input);
    setLoading(true);
  };

  return (
    <div className="number-container">
      <Jumbotron
        style={{
          width: "50rem",
          margin: "auto",
          marginTop: "15%",
          backgroundColor: "#67032F",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          {data}
        </h1>
        <p>
          <input
            type="text"
            className="form-control"
            placeholder="Hello, Enter A Number Here!"
            name="input"
            value={input}
            onChange={handleChange}
          />
        </p>
        <p>
          <button className="btn btn-info " onClick={fetchNum}>
            Fetch
          </button>
        </p>
        <p>
          {loading && (
            <h1
              style={{
                color: "white",
              }}
            >
              wait while we are processing...
            </h1>
          )}
        </p>
      </Jumbotron>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}
export default Number;
