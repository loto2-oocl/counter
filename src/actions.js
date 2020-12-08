import {
  DECREASE_SUM,
  INCREASE_SUM,
  RESET_SUM,
  UPDATE_COUNTER_SIZE,
} from './actionTypes';

const increaseSum = () => ({
  type: INCREASE_SUM,
});

const decreaseSum = () => ({
  type: DECREASE_SUM,
});

const resetSum = () => ({
  type: RESET_SUM,
});

const updateCounterSize = (size) => ({
  type: UPDATE_COUNTER_SIZE,
  payload: size,
});

export { increaseSum, decreaseSum, resetSum, updateCounterSize };
