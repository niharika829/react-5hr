import React, { Component } from "react";
class Memegenerator extends Component {
  constructor() {
    super();
    this.state = {
      toptext: "",
      bottomtext: "",
      randomimage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handle = this.handle.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes);
        this.setState({ allMemeImgs: memes });
      });
  }
  handle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  submit(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randimg = this.state.allMemeImgs[random].url;
    this.setState({ randomimage: randimg });
  }
  render() {
    const input_text = {
      width: "100%",
      padding: "12px 20px",
      margin: "8px 0",
      boxSizing: "border-box",
      border: "none",
      backgroundColor: "#3CBC8D",
      color: "white",
    };
    const btn_generate = {
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      borderRadius: "20px 80px",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      cursor: "pointer",
      backgroundColor: "#555555",
    };
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            style={input_text}
            type="text"
            name="toptext"
            placeholder="toptext"
            value={this.state.toptext}
            onChange={this.handle}
          />
          <input
            style={input_text}
            type="text"
            name="bottomtext"
            placeholder="bottomtext"
            value={this.state.bottomtext}
            onChange={this.handle}
          />
          <button style={btn_generate}>generate</button>
        </form>
        <div
          className="image"
          style={{
            position: "relative",
            width: "100%",
            left: 60,
          }}
        >
          <img src={this.state.randomimage} alt="" width="60%" height="50%" />

          <h2
            style={{
              position: "absolute",
              top: 30,
              left: 50,
              width: "100%",
            }}
          >
            <span
              style={{
                color: "white",
                font: "bold 24px/45px Helvetica, Sans-Serif",
                letterSpacing: "-1px",
                background: "rgb(0, 0, 0)",
                background: "rgba(0, 0, 0, 0.4)",
                padding: "10px",
              }}
            >
              {this.state.toptext}
            </span>
          </h2>
          <h2
            style={{
              position: "absolute",
              bottom: 30,
              left: 50,
              width: "100%",
            }}
          >
            <span
              style={{
                color: "white",
                font: "bold 24px/45px Helvetica, Sans-Serif",
                letterSpacing: "-1px",
                background: "rgb(0, 0, 0)",
                background: "rgba(0, 0, 0, 0.4)",
                padding: "10px",
              }}
            >
              {this.state.bottomtext}
            </span>
          </h2>
          <br />
        </div>
      </div>
    );
  }
}
export default Memegenerator;
