import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("USERNAME"),
    password: Joi.string().required().label("PASSWORD"),
  };
  validate = () => {
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.account, this.schema, options);
    console.log(result);
    if (!result.error) return null; //if(!null)//which is true
    const errors = {}; //else start
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors; //else end
  };

  handleSubmit = (event) => {
    event.preventDefault(); //it will reload the page

    const errors = this.validate();
    //if const error has some value then change the state of errors to errors other wise give a empty object becoz null will give error

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("done"); //else
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; //computed object
    console.log(obj);
    const schema = { [name]: this.schema[name] };
    console.log(schema);
    const result = Joi.validate(obj, schema, { abortEarly: false });
    //abortearly even if htere are errors dont abort let it complete
    //abort agr true hoga toh vo ek baar mein ek error dega
    console.log(result);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errormessage = this.validateProperty(input);
    if (errormessage) errors[input.name] = errormessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors: errors || {} });
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
            <input
              type="submit"
              disabled={this.validate()}
              value="Submit"
              className="btn"
            />
          </form>
        </div>
        {/*bootstrap form*/}
      </React.Fragment>
    );
  }
}

export default LoginForm;
