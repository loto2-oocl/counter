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
  }

  increaseSum = (increment) => {
    this.setState(prevState => ({
      ...prevState,
      sum: prevState.sum + increment,
    }));
  }

  decreaseSum = (decrement) => {
    this.setState(prevState => ({
      ...prevState,
      sum: prevState.sum - decrement,
    }));
  }

  render() {
    const { size, sum } = this.state;

    return (
      <div>
        <CounterSizeGenerator size={size} setSize={this.setSize} />
        <CounterGroupSum sum={sum} />
        <CounterGroup size={size} sum={sum} increaseSum={this.increaseSum} decreaseSum={this.decreaseSum} />
      </div>
    )
  }
}

export default MultipleCounter;