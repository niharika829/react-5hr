import React from "react";
function container(props) {
  return (
    <div>
      <form onSubmit={props.final}>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={props.data.firstname}
          onChange={props.handle}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={props.data.lastname}
          onChange={props.handle}
        />
        <textarea
          name="textarea"
          value={props.data.textarea}
          placeholder="write something good"
          onChange={props.handle}
        />

        <input
          type="checkbox"
          name="friendly"
          checked={props.data.friendly}
          onChange={props.handle}
        />

        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handle}
        />

        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handle}
        />

        <select
          name="selectbox"
          value={props.data.selectbox}
          onChange={props.handle}
        >
          <option value="blue">blue</option>
          <option value="red">red</option>
          <option value="black">black</option>
          <option value="brown">brown</option>
        </select>
        <button>submit</button>
      </form>
      <p>
        {props.data.firstname} {props.data.lastname} {props.data.textarea}{" "}
        {props.data.gender} {props.data.selectbox}
      </p>
      <p>is it friendly:-{props.data.friendly ? "yes" : "no"}</p>
    </div>
  );
}
export default container;
