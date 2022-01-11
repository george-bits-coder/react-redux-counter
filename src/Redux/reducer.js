import { ADD_TODO } from "./actionTypes";

//reducer always returns current state
// initial value of state is always stored in reducer
//for example for counter, we initialize initial ={counter:0}
const initial = { todos: [], counter: 5 };

// the name reducer is always fixed we pass initial value as state
export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      // spreading the state object and updating state.counter
      return {
        ...state,
        counter: state.counter + payload
      };
    default:
      return state;
  }
};
