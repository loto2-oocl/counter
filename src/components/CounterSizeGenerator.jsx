import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
  handleChange = (event) => {
    const input = event.target.value;
    const size = Number(input) > 0 ? Number(input) : 0;
    this.props.updateCounterSize(size);
  };

  render() {
    return (
      <div>
        <input type="number" onChange={this.handleChange} />
      </div>
    );
  }
}

export default CounterSizeGenerator;
