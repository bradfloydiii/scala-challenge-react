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

export const calculateTimeToCrossBridge = (bridgeId, numHikers, bridgeLength) => {
  let totalBridgeTime = 0;
  // grab the subset of hikers by numHikers

  // sort the array fastest to slowest

  // assign the faster hiker to the lead

  // calculate the time to cross with the slowest hiker lead first
  // remember to add the time to cross back with the fastest hiker
  // since there is only one torch
  return totalBridgeTime;
};
