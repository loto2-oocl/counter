import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

class CounterGroup extends Component {
  initArraySize(size) {
    return Array.from(Array(size).keys());
  }

  render() {
    const { size } = this.props;
    const arraySize = this.initArraySize(size);

    return (
      <div>
        {arraySize.map((value) => (
          <CounterContainer key={value} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
