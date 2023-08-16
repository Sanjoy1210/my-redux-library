import { createStore } from "./my-redux";

const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

// reducer function
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// create store
const store = createStore(counter);

// this method just update the counter with current state
const updateUI = () => {
  document.getElementById('counter').innerHTML = store.getState();
}

// click handlers
increment.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

decrement.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

// registering subscriber with updateUI method
store.subscribe(updateUI);
