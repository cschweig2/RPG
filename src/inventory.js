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

// TODO add first aid and potion objects with multiple attributes
const inventoryValues = { coins: 0, firstAid: 0, potions: 0, food: 0}

const inv1 = storeState(inventoryValues);
const inv2 = storeState(inventoryValues);
const inv3 = storeState(inventoryValues);

const addName = changeStateString("characterName");

const ozzbubba = addName("Ozzbubba");
const newInv1State = inv1(ozzbubba);
console.log("new inv1 state", newInv1State);

const draco = addName("Draco");
const newInv2State = inv2(draco);
console.log("new inv2 state", newInv2State);

const joyce = addName("Joyce");
const newInv3State = inv3(joyce);
console.log("the new inv3 state", newInv3Sate);