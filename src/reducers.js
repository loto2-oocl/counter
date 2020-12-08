import { combineReducers } from 'redux';
import { DECREASE_SUM, INCREASE_SUM } from './actionTypes';

const sum = (state = 0, action) => {
  if (action.type === INCREASE_SUM) {
    return state + 1;
  }

  if (action.type === DECREASE_SUM) {
    return state - 1;
  }

  return state;
};

export default combineReducers({
  sum,
});
