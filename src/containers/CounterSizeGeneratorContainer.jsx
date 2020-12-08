import { connect } from 'react-redux';
import { updateCounterSize } from '../actions';
import CounterSizeGenerator from '../components/CounterSizeGenerator';

// const mapStateToProps = (state) => ({
//   sum: state.sum,
// });

const mapDispatchToProps = (dispatch) => ({
  updateCounterSize: (size) => dispatch(updateCounterSize(size)),
});

const CounterSizeGeneratorContainer = connect(
  null,
  mapDispatchToProps
)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;
