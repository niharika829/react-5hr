import React, { Component } from "react";
import FormContainer from "./formcontainer29.js";
class main extends Component {
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
      <FormContainer
        handle={this.handle}
        final={this.final}
        data={this.state}
      />
    );
  }
}
export default main;
