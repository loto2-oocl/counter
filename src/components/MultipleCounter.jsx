import React, { Component } from 'react';

import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';

class MultipleCounter extends Component {
  render() {
    return (
      <div>
        <CounterSizeGeneratorContainer />
        <CounterGroupSumContainer />
        <CounterGroupContainer />
      </div>
    );
  }
}

export default MultipleCounter;
