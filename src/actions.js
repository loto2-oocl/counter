import { DECREASE_SUM, INCREASE_SUM } from './actionTypes';

const increaseSum = () => ({
  type: INCREASE_SUM,
});

const decreaseSum = () => ({
  type: DECREASE_SUM,
});

export { increaseSum, decreaseSum };
