import { increment, decrement, reset } from './Action';

const initialState = {
  counter: 0,
  // reset: 0,
  name: 'aman',
  age: 21,
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, counter: state.counter + action.payload.value };
    case decrement:
      return { ...state, counter: state.counter - action.payload.value };
    case reset:
      return { ...initialState };
    default:
      return state;
  }
}
