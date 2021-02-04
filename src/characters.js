// import 'storeState.js'

// const storeState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const changeStateString = (prop) => {
//   return (string) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || "") + string
//     });
//   }
// }

const initialValues = { health: 100, endurance: 100, magika: 100, stamina: 100, level: 1};
// add a name and species when creating a character

// creates 3 new characters
const char1 = storeState(initialValues);
const char2 = storeState(initialValues);
const char3 = storeState(initialValues);

// creates instances of state changes
const addName = changeStateString("name");
const addSpecies = changeStateString("species");

//adds name to character 1
const ozzbubba = addName("Ozzbubba");
const newChar1State = char1(ozzbubba);
const warlock = addSpecies("Warlock");
const newChar1StateSpecies = char1(warlock);
console.log("add species to character 1", newChar1StateSpecies);

//adds name to character 2
const draco = addName("Draco");
const newCharacter2State = char2(draco);
const wizard = addSpecies("Wizard");
const newChar2StateSpecies = char2(wizard);
console.log("add species to character 2", newChar2StateSpecies);

//adds name to character 3
const joyce = addName("Joyce");
const newCharacter3State = char3(joyce);
const rogue = addSpecies("Rogue");
const newChar3StateSpecies = char3(rogue);
console.log("add name to character 3", newChar3StateSpecies);