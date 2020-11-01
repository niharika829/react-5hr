import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./loginbutton";
import JSONPretty from "react-json-pretty";
//import UserProfile from "./userprofile";

import NavBar from "./navbar.js";
import About from "./about.js";
import Cards from "./cards.js";
//import Profile from "./userprofile.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <div>
        <Login />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cards" component={Cards} />
          {/*<Route path="/profile/:username?" component={Profile} />*/}
          {/*  <Route path="*" component={() => "404 not found"} />*/}
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <React.Fragment>
        <h2>user</h2>
        <img src={user.picture} alt={user.name} />
        <JSONPretty data={user} />
      </React.Fragment>
    )
  );
};
export default App;
