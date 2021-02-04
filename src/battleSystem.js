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

const mufasaBattleValues = { opponent: "Mufasa", health: 100 }
// character strikes against opponent, decrease opponents health by 30
// we would change the state and decrease the health by 30
// keep going until health reaches 0 or less (detected with if/else after last state change has been made)
// declare the character the winner and level up by 1

const voldemortBattleValues = { opponent: "Voldemort", health: 100 }
