import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <section>
        <input type="button" value="-" />
        <span>0</span>
        <input type="button" value="+" />
      </section>
    );
  }
}

export default Counter;