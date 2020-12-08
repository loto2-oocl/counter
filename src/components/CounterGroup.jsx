import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import { v4 as uuidV4 } from 'uuid';

class CounterGroup extends Component {
  initArraySize(size) {
    return Array.from(Array(size).keys());
  }

  render() {
    const { size } = this.props;
    const arraySize = this.initArraySize(size);

    return (
      <div>
        {arraySize.map(() => (
          <CounterContainer key={uuidV4()} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
