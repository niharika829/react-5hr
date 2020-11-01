import React, { Component } from "react";

export class input extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submit(event) {
    event.preventDefault();
    this.props.submit(this.state.title);
    this.setState({
      title: "",
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="title"
            placeholder="add a todo"
            value={this.state.title}
            onChange={this.change}
          />
          <input type="submit" value="submit" />
          you are adding:- {this.state.title}
        </form>
      </div>
    );
  }
}

export default input;
