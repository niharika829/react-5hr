import React from 'react'
class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
    count: state.count + 1
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.count}
      </button>
    );
  }
}

export default Toggle
