const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || "") + string
    });
  }
}

