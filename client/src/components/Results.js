import React, { useContext } from 'react';
import { StoreContext } from '../context/Store';

export const Results = () => {
  const {
    bridges,
    calculateResults,
    calculatedBridgeData,
    getHikingData,
    hikers,
    isLoading,
  } = useContext(StoreContext);

  const getInitialData = (e) => {
    e.preventDefault();
    getHikingData();
  };

  const foo = (e) => {
    e.preventDefault();
    calculateResults();
  }

  return (
    <div className='status'>
      <div className='row'>{calculatedBridgeData}</div>
      <div className='row'>
        <div className='col'>
          <button onClick={(e) => getInitialData(e)}>Get Initial Data</button>
        </div>
        <div className='col'>
          <button onClick={(e) => foo(e)}>Calculate Bridge Data</button>
        </div>
      </div>
      {!isLoading && (
        <div className='row'>
          <div className='col'>
            <h4>Hikers</h4>
            {hikers.map((hiker) => (
              <span key={hiker._id}>
                id: {hiker._id}, speed: {hiker.speed} ft./minute
              </span>
            ))}
          </div>
          <div className='col'>
            <h4>Bridges</h4>
            {bridges.map((bridge) => (
              <span key={bridge._id}>
                length: {bridge.length} ft., hikers: {bridge.numHikers}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
