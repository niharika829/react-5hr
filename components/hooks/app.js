import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
const App = () => {
  const [value, setValue] = useState(10); //WE CAN ARRAY ,OBJECT ETC BUT NOT NULL, BECAUSE STATE CAN NEVER BE NULL
  const [counter, setCounter] = useState({ count1: 0, count2: 5 });
  //if we will no give value it will be undefined and if try to add 1 to it it will become NAN
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useForm({ email: "", password: "" });
  //(callback,dependency)
  //it will return once at the starting then according to the dependencies
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("niharika");
    };
  }, [values.password, email]); //show this console only when there is a change in value.password...that is the forth input field
  return (
    <React.Fragment>
      <div onClick={() => setValue((value) => value + 1)}>{value}</div>
      <button
        onClick={() =>
          setCounter({ count1: counter.count1 + 1, count2: counter.count2 + 1 })
        }
      >
        inc
      </button>
      <div>{counter.count1}</div>
      <div>{counter.count2}</div>
      <input
        type="email"
        value={email}
        name="email"
        placeholder="email"
        onChange={(event) => setEamil(event.target.value)}
      />
      <input
        type="password"
        value={password}
        name="password"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="email"
        value={values.email}
        name="email"
        placeholder="email"
        onChange={setValues}
      />
      <input
        type="password"
        value={values.password}
        name="password"
        placeholder="password"
        onChange={setValues}
      />
    </React.Fragment>
  );
};
export default App;
