import React, { Component } from "react";

class CounterSizeGenerator extends Component {
  handleChange = (event) => {
    this.props.setSize(event.target.value);
  };

  render() {
    const { size } = this.props;

    return (
      <div>
        <input type="number" value={size} onChange={this.handleChange} />
      </div>
    );
  }
}

export default CounterSizeGenerator;
