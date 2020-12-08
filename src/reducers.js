import { combineReducers } from 'redux';
import { DECREASE_SUM, INCREASE_SUM, UPDATE_COUNTER_SIZE } from './actionTypes';

const sum = (state = 0, action) => {
  if (action.type === INCREASE_SUM) {
    return state + 1;
  }

  if (action.type === DECREASE_SUM) {
    return state - 1;
  }

  return state;
};

const size = (state = 0, action) => {
  if (action.type === UPDATE_COUNTER_SIZE) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  sum,
  size,
});
