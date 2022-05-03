export default (state, action) => {
  switch (action.type) {
    case 'GET_INITIAL_STATE':
      return {
        ...state,
        isLoading: false,
        hikers: action.payload.hikers,
        bridges: action.payload.bridges,
      };
    case 'ADD_HIKER':
      return {
        ...state,
        hikers: [...state.hikers, action.payload],
      };
    case 'ADD_BRIDGE':
      return {
        ...state,
        bridges: [...state.bridges, action.payload],
      };
    case 'CALCULATE_ALL_BRIDGE_DATA':
      let results = calculateAllBridgeData(state);
      return {
        ...state,
        results,
      };
    case 'TRANSACTION_ERROR':
      alert(JSON.stringify(action.payload));
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const calculateAllBridgeData = (state) => {
  let results = [];
  state.bridges.map((bridge) => {
    results.push(
      JSON.stringify(
        calculateBridgeData(state, bridge.numHikers, bridge.length)
      )
    );
  });
  console.log(`RESULTS: ${results}`);
  return results;
};

const calculateBridgeData = (state, numHikers, bridgeLength) => {
  let totalBridgeTime = 0;

  // grab the subset of hikers by numHikers
  let slowHikers = state.hikers.slice(0, numHikers);

  // grab hiker ids
  let hikerIds = slowHikers.map((hiker) => hiker._id);

  // sort the array slowest to fastest
  slowHikers.sort((a, b) => (a.speed > b.speed ? 1 : -1));

  // assign the fastest hiker to the lead
  let leadHiker = slowHikers.pop();

  // calculate the time to cross with the slowest hiker lead first
  // remember to add the time to cross back with the fastest hiker
  // since there is only one torch
  slowHikers.map((slowHiker, index) => {
    totalBridgeTime +=
      bridgeLength / slowHiker.speed +
      (index === slowHikers.length - 1 ? 0 : bridgeLength / leadHiker.speed);
  });

  return { bridgeLength, numHikers, hikerIds, totalBridgeTime };
};
