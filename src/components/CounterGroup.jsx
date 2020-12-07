import React, { Component } from 'react'
import Counter from './Counter';

class CounterGroup extends Component {
  initArraySize(size) {
    const number = Number(size) > 0 ? Number(size) : 0;

    return Array.from(Array(number).keys());
  }

  increaseSum = (increment) => {
    this.props.setSum(this.props.sum + increment);
  }

  decreaseSum = (decrement) => {
    this.props.setSum(this.props.sum - decrement);
  }

  render() {
    const { size } = this.props;
    const arraySize = this.initArraySize(size);

    return (
      <div>
        {
          arraySize.map((value) => (
            <Counter key={value} increaseSum={this.increaseSum} decreaseSum={this.decreaseSum} />
          ))
        }
      </div>
    )
  }
}

export default CounterGroup;