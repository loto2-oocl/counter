import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

class CounterGroup extends Component {
  initArraySize(size) {
    const number = Number(size) > 0 ? Number(size) : 0;

    return Array.from(Array(number).keys());
  }

  render() {
    const { size } = this.props;
    const arraySize = this.initArraySize(size);

    return (
      <div>
        {arraySize.map((value) => (
          <CounterContainer
            key={value}
            size={size}
            increaseSum={this.props.increaseSum}
            decreaseSum={this.props.decreaseSum}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
