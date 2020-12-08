import { DECREASE_SUM, INCREASE_SUM, UPDATE_COUNTER_SIZE } from './actionTypes';

const increaseSum = () => ({
  type: INCREASE_SUM,
});

const decreaseSum = () => ({
  type: DECREASE_SUM,
});

const updateCounterSize = (size) => ({
  type: UPDATE_COUNTER_SIZE,
  payload: size,
});

export { increaseSum, decreaseSum, updateCounterSize };
