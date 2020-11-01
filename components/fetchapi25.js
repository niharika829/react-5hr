import React, { Component } from "react";
class FetchApi extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          character: data,
          isLoading: false,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? "loading..." : this.state.character.name}
      </div>
    );
  }
}
export default FetchApi;
