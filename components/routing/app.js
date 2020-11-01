import React from "react";
import Nav from "./nav.js";
import About from "./about.js";
import Shop from "./shop.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function app() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="*" component={() => "404 not found"} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => <h1>home</h1>;

export default app;
