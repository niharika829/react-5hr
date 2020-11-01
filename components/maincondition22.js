import React, { Component } from "react";
import Condition from "./conditionalrendering23.js";
class MainCondtion extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      value: "some cool stuff",
      unreadmsg: ["a", "b"],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <div>
          <h1>navbar</h1>
          {this.state.isLoading ? (
            <h1>loading...</h1>
          ) : (
            <div>
              <Condition name={this.state.value} />
            </div>
          )}
          <h1>footer</h1>
        </div>

        <div>
          {this.state.unreadmsg.length > 0 && (
            <h1>you have {this.state.unreadmsg.length} new message</h1>
          )}
        </div>
      </div>
    );
  }
}
export default MainCondtion;
