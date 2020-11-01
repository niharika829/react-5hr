import React, { Component } from "react";
import propTypes from "prop-types";
export class todocont extends Component {
  styles() {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.styles()}>
        <input type="checkbox" onChange={this.props.handle.bind(this, id)} />{" "}
        {title}
        <button onClick={this.props.del.bind(this, id)}>X</button>
      </div>
    );
  }
}
todocont.propTypes = {
  todo: propTypes.object.isRequired,
  handle: propTypes.func.isRequired,
  del: propTypes.func.isRequired,
};
export default todocont;
