const getStateNeighbors = (left, rigth) => ((left === 0 && rigth === 0) || (left === 1 && rigth === 1)) ? 0 : 1;

const init = (states, days) => {
  if (!states || states.length > 8) {
    console.log("States are invalid");
    return;
  }

  let previousState = new Array(8);
  let nextState = new Array(8);

  previousState = states;

  for (let i = 0; i < days; i++) {
    let previousInitialState = previousState[0];
    let previousLastState = previousState[7];

    for (let index = 0; index < previousState.length; index++) {
      if (index === 0) {
        nextState[index] = getStateNeighbors(0, previousState[index + 1]);
        continue;
      }

      if (index === 1) {
        nextState[index] = getStateNeighbors(previousInitialState, previousState[index + 1]);
        continue;
      }

      if (index === 6) {
        nextState[index] = getStateNeighbors(previousState[index - 1], previousLastState);
        continue;
      }      

      if (index === 7) {
        nextState[index] = getStateNeighbors(previousState[index - 1], 0);
        continue;
      }

      nextState[index] = getStateNeighbors(previousState[index - 1], previousState[index + 1]);
    }
    previousState = nextState;
    nextState = new Array(8);
  }

  console.log("OUTPUT: " + previousState);
};

console.log("Test 1:");
init([1, 0, 0, 0, 0, 1, 0, 0], 1);
console.log("\nTest 2:");
init([1, 1, 1, 0, 1, 1, 1, 1], 2);