import React, { Component } from "react";
import Todomap from "./todomap";
import Header from "./header.js";
import Input from "./input.js";
import About from "./about.js";
import axios from "axios";
import uuid from "react-uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
class app extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };

    this.handle = this.handle.bind(this);
    this.del = this.del.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
      .then((res) => this.setState({ todos: res.data }));
  }

  handle = (id) => {
    this.setState({
      todos: this.state.todos.map((newtodo) => {
        if (newtodo.id === id) {
          newtodo.completed = !newtodo.completed;
        }
        return newtodo;
      }),
    });
  };
  del = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id != id)],
        })
      );
  };
  submit(title) {
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        id: uuid(),
        title: title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
    console.log(title);
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Input submit={this.submit} />
                <Todomap
                  todo={this.state.todos}
                  handle={this.handle}
                  del={this.del}
                />
              </React.Fragment>
            )}
          ></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default app;
