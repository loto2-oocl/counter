import React, { Component } from 'react'
import Counter from './Counter';

class CounterGroup extends Component {
  initArraySize(size) {
    const number = Number(size) > 0 ? Number(size) : 0;

    return Array.from(Array(number).keys());
  }

  render() {
    const { size } = this.props;

    return (
      <div>
        {
          this.initArraySize(size).map((value) => (
            <Counter key={value} />
          ))
        }
      </div>
    )
  }
}

export default CounterGroup;