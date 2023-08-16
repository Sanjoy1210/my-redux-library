function createStore(reducer) {
  // store the current state
  let currentState = null;

  // store the reference of reducer
  let mainReducer = reducer;

  // store the reference of listener for subscribe method
  let mainListener = null;

  // return the current state
  const getState = () => {
    return currentState;
  }

  // register the listener method
  const subscribe = (listener) => {
    mainListener = listener;
  }

  const dispatch = (action) => {
    // to get the updated state using invoke dispatch function
    currentState = mainReducer(currentState, action);
    // it will also call the listener that register by the subscribe method
    mainListener();
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

export default createStore;