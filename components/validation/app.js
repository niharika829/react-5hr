import React from "react";
import Login from "./Login";
import LoginForm from "./LoginForm";
import RawLogin from "./rawlogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function app() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/rawlogin" component={RawLogin} />
          <Route path="/login" component={LoginForm} />
          <Route path="/loginpage" component={Login} />
          <Redirect from="/" to="/login" exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default app;
