import React, { Component } from 'react'

import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

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

    if (newSize <= 0) {
      this.resetSum();
    }
  }

  setSum = (newSum) => {
    this.setState(prevState => ({
      ...prevState,
      sum: newSum,
    }));
  }

  resetSum = () => {
    this.setSum(0);
  }

  render() {
    const { size, sum } = this.state;

    return (
      <div>
        <CounterSizeGenerator size={size} setSize={this.setSize} />
        <CounterGroupSum sum={sum} />
        <CounterGroup size={size} sum={sum} setSum={this.setSum} />
      </div>
    )
  }
}

export default MultipleCounter;