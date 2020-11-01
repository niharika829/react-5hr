import React, { Component } from "react";
class Log extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => {
      return { isLogin: !prev.isLogin };
    });
  }
  render() {
    let buttontext = this.state.isLogin ? "logout" : "login";
    return (
      <div>
        <div>
          {this.state.isLogin ? "you are logged in" : "session expired"}
        </div>
        <button onClick={this.handleClick}>{buttontext}</button>
      </div>
    );
  }
}
export default Log;
