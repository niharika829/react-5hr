import React, { Component } from "react";
class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      textarea: "",
      friendly: false,
      gender: "",
      selectbox: "blue",
    };
    this.handle = this.handle.bind(this);
    this.final = this.final.bind(this);
  }
  handle(event) {
    const { name, value, type, checked } = event.target;
    type == "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
          //[event.target.name]:event.target.value
        });
  }
  final(event) {
    alert("done");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.final}>
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            value={this.state.firstname}
            onChange={this.handle}
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={this.state.lastname}
            onChange={this.handle}
          />
          <textarea
            name="textarea"
            value={this.state.textarea}
            placeholder="write something good"
            onChange={this.handle}
          />

          <input
            type="checkbox"
            name="friendly"
            checked={this.state.friendly}
            onChange={this.handle}
          />

          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handle}
          />

          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handle}
          />

          <select
            name="selectbox"
            value={this.state.selectbox}
            onChange={this.handle}
          >
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="brown">brown</option>
          </select>
          <button>submit</button>
        </form>
        <p>
          {this.state.firstname} {this.state.lastname} {this.state.textarea}{" "}
          {this.state.gender} {this.state.selectbox}
        </p>
        <p>is it friendly:-{this.state.friendly ? "yes" : "no"}</p>
      </div>
    );
  }
}
export default Forms;
