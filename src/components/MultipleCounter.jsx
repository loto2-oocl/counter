import React, { Component } from 'react'

import CounterGroup from './CounterGroup';

class MultipleCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 0,
      sum: 0,
    };
  }

  setSize = (newSize) => {
    this.setState(prevState => ({
      ...prevState,
      size: newSize,
    }));
  }

  setSum = (newSum) => {
    this.setState(prevState => ({
      ...prevState,
      sum: newSum,
    }));
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.size} onChange={this.onChange} />
        <CounterGroup size={this.state.size} />
      </div>
    )
  }
}

export default MultipleCounter;