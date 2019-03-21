const getStateNeighbors = (left, rigth) => ((left === 0 && rigth === 0) || (left === 1 && rigth === 1)) ? 0 : 1;

const init = (states, days) => {
  let previousState = new Array(states.length);
  let nextState = new Array(states.length);

  previousState = states;

  for (let i = 0; i < days; i++) {
    nextState = previousState.map((item, index) => {
      if (index === 0) return getStateNeighbors(0, previousState[index + 1]);     

      if (index === states.length - 1) return getStateNeighbors(previousState[index - 1], 0);      

      return getStateNeighbors(previousState[index - 1], previousState[index + 1]);    
    });
    previousState = nextState;
    nextState = new Array(states.length);
  }

  console.log("OUTPUT: " + previousState);
};

console.log("Test 1:");
init([1, 0, 0, 0, 0, 1, 0, 0], 1);
console.log("\nTest 2:");
init([1, 1, 1, 0, 1, 1, 1, 1], 2);