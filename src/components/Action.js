export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';
export const reset = 'RESET';
// yahan INCREMENT and DECREMENT ma spell ghalat bi likh do to bi kuch nai hoga

export const incrementAction = () => ({
  type: increment,
  payload: { value: 5 },
});

export const decrementAction = () => ({
  type: decrement,
  payload: { value: 5 },
});

export const resetAction = () => ({
  type: reset,
});
