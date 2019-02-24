import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleCounter.bind(this);
  }

  handleCounter(value) {
    this.setState({
      counter: value
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleCounter(this.state.counter + 1)}> + Increment</button>
          <button onClick={() => this.handleCounter(this.state.counter - 1)}> + Decrement</button>
        </div>
        <div>
          Current: {this.state.counter}
        </div>
      </div>
    );
  }
}
