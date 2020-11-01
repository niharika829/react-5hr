import React from "react";
function TodoMain(props) {
  const styling = {
    color: "red",
    textDecoration: "line-through",
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={props.listitem.completed}
        onChange={() => props.handleChange(props.listitem.id)}
      />
      <p style={props.listitem.completed ? styling : null}>
        {props.listitem.name}
      </p>
    </div>
  );
}

export default TodoMain;
