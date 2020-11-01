import React, { Component } from "react";
import Input from "./input";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "password is required";
    }
    //console.log(Object.keys(errors));
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault(); //it will reload the page

    // if (this.state.account.username === "") {
    //   alert(this.state.errors.username);
    // } else {
    //   console.log("done");
    // }

    const errors = this.validate();
    //if const error has some value then change the state of errors to errors other wise give a empty object becoz null will give error

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("done");
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errormessage = this.validateProperty(input);
    if (errormessage) errors[input.name] = errormessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors: errors || {} });
    //console.log(account);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              label="username"
              value={this.state.account.username}
              onchange={this.handleChange}
              id="username"
              type="text"
              error={this.state.errors.username}
            />
            <Input
              name="password"
              label="password"
              value={this.state.account.password}
              onchange={this.handleChange}
              id="password"
              type="password"
              error={this.state.errors.password}
            />
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
        {/*bootstrap form*/}
      </React.Fragment>
    );
  }
}

export default LoginForm;
