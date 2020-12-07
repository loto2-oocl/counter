import React, { Component } from 'react'

class CounterGroupSum extends Component {
  render() {
    const { sum } = this.props;

    return (
      <div>
        <span>
          Total: {sum}
        </span>
      </div>
    )
  }
}

export default CounterGroupSum;