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
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
