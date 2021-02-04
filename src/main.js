// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import 'characters.js';
// import 'inventory.js';
// import 'battleSystem.js';
// import 'levelUp.js';
// import 'storeState.js';
// import { changeStateValue } from './storeState';


const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeStateObject = (prop) => {
  return (object) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || {}) + {object}
    });
  }
}

const changeStateValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  }
}

// const newObject = Object.assign({}, ...state)

const stateControl = storeState();
const currentState = stateControl();

//character values
const initialValues = { health: 100, endurance: 100, magika: 100, stamina: 100};
const char1 = storeState(initialValues);

//inventory values
const inventoryValues = { coins: 1, firstAid: 0, potions: 0, food: 0 }

const inv1 = storeState(inventoryValues);
const inv1CurrentState = inv1();
console.log("inv1CurrentState", inv1CurrentState);
const char1CurrentState = char1();

// const addInventory = changeStateObject("inventory");
// console.log("changeState for inventory", changeStateObject("inventory")(inventoryValues));
// console.log("addInventory", addInventory(inv1CurrentState));
// const charWithInv = addInventory(inv1CurrentState);
// console.log("charWithInv", charWithInv);
const newChar = {...inv1CurrentState, ...char1CurrentState};
console.log("add inventory to character 1", newChar);

const newChar2 = Object.assign(inv1CurrentState, char1CurrentState);
console.log("add inventory..", newChar2);

// changing level
const addLevel = changeStateValue("level");
const charLevelUp = addLevel(1);
const extraLevelUp = addLevel(5);

// adding level to character 1
const newChar1Level = char1(charLevelUp);
const newChar2Level = char1(charLevelUp);
const newChar3Level = char1(charLevelUp);
const newChar4Level = char1(extraLevelUp);
console.log("add level to char 1", newChar4Level);
