import React, { Component } from 'react';

import CounterGroup from './CounterGroup';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';

class MultipleCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 0,
      sum: 0,
    };
  }

  setSize = (newSize) => {
    this.setState({
      size: newSize,
      sum: 0,
    });
  };

  increaseSum = (increment) => {
    this.setState((prevState) => ({
      sum: prevState.sum + increment,
    }));
  };

  decreaseSum = (decrement) => {
    this.setState((prevState) => ({
      sum: prevState.sum - decrement,
    }));
  };

  render() {
    const { size, sum } = this.state;

    return (
      <div>
        <CounterSizeGeneratorContainer size={size} setSize={this.setSize} />
        <CounterGroupSumContainer sum={sum} />
        <CounterGroup
          size={size}
          sum={sum}
          increaseSum={this.increaseSum}
          decreaseSum={this.decreaseSum}
        />
      </div>
    );
  }
}

export default MultipleCounter;
