export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const changeStateValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  }
}

export const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || "") + string
    });
  }
}