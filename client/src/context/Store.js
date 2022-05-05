import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const Store = {
  hikers: [],
  bridges: [],
  calculatedBridgeData: [],
  isLoading: true,
  totalBridgeTime: 0,
};

// creates the context for use by all components through it's
// provider (StoreProvider)
export const StoreContext = createContext(Store);

// creates the global state provider for our context (StoreContext)
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, Store);

  const getHikingData = async () => {
    try {
      const res = await axios.get('/hiking/data');
      dispatch({
        type: 'GET_INITIAL_STATE',
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: { message: 'ERROR GET_TRANSACTIONS' },
      });
    }
  };
  
  const addHiker = async (hiker) => {
    dispatch({
      type: 'ADD_HIKER',
      payload: hiker,
    });
  };
  
  const addBridge = async (bridge) => {
    dispatch({
      type: 'ADD_BRIDGE',
      payload: bridge,
    });
  };
  
  const calculateResults = async () => {
    dispatch({
      type: 'CALCULATE_ALL_BRIDGE_DATA',
      payload: '',
    });
  };

  return (
    <StoreContext.Provider
      value={{
        hikers: state.hikers,
        bridges: state.bridges,
        isLoading: state.isLoading,
        calculatedBridgeData: state.calculatedBridgeData,
        totalBridgeTime: state.totalBridgeTime,
        getHikingData,
        addHiker,
        addBridge,
        calculateResults,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
