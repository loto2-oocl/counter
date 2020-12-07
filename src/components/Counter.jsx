import React, { Component } from 'react';

class Counter extends Component {
  DEFAULT_STEP_SIZE = 1;

  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  onIncrease = () => {
    this.setState(prevState => ({
      number: prevState.number + this.DEFAULT_STEP_SIZE,
    }));

    this.props.increaseSum(this.DEFAULT_STEP_SIZE);
  }

  onDecrease = () => {
    this.setState(prevState => ({
      number: prevState.number - this.DEFAULT_STEP_SIZE,
    }));

    this.props.decreaseSum(this.DEFAULT_STEP_SIZE);
  }

  componentWillUnmount() {
    this.props.decreaseSum(this.state.number);
  }

  render() {
    return (
      <section>
        <input type="button" value="-" onClick={this.onDecrease} />
        <span>{this.state.number}</span>
        <input type="button" value="+" onClick={this.onIncrease} />
      </section>
    );
  }
}

export default Counter;