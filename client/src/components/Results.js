import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../context/Store';

export const Results = () => {
  const { isLoading, hikers, bridges, getHikingData } = useContext(StoreContext);

  // getHikingData();
  const fetchData = (e) => {
    e.preventDefault();
    getHikingData();
  };

  useEffect(() => {
    if(!isLoading) { 
      let test = calculateTimeToCrossBridge(bridges[0]._id, bridges[0].numHikers, bridges[0].length);
      console.log(test);
    }
  });

  const calculateTimeToCrossBridge = (bridgeId, numHikers, bridgeLength) => {
    // initialize total time crossing bridge
    let totalBridgeTime = 0;

    // grab the subset of hikers by numHikers
    let slowHikers = hikers.slice(0, numHikers);
    // grab hiker ids
    let hikerIds = slowHikers.map(hiker => hiker._id);
    // sort the array slowest to fastest
    slowHikers.sort((a, b) => (a.speed > b.speed) ? 1: -1);
    // assign the faster hiker to the lead
    let leadHiker = slowHikers.pop();

    // calculate the time to cross with the slowest hiker lead first
    // remember to add the time to cross back with the fastest hiker
    // since there is only one torch
    slowHikers.map((noviceHiker, index) => {
      console.log('time to cross bridge', bridgeLength/noviceHiker.speed);
      totalBridgeTime += (bridgeLength/noviceHiker.speed) + ((index === slowHikers.length - 1) ? 0 : (bridgeLength/leadHiker.speed));
    });
    return {totalBridgeTime, hikerIds};
  };

  return (
    <div className='status'>
      <p>
        <button onClick={(e) => fetchData(e)}>Get Hiker Data</button>
      </p>
      <div className='row'>
        {/* <div className='col'>
          {hikers.length > 0 && <h4>Hikers</h4>}
          {hikers.map((hiker) => (
            <span key={hiker._id}>
              id: {hiker._id}, speed: {hiker.speed} ft./minute
            </span>
          ))}
        </div> */}
        <div className='col'>
          {bridges.length > 0 && <h4>Bridges</h4>}
          {bridges.map((bridge) => (
            <span key={bridge._id}>
              length: {bridge.length} ft., hikers: {bridge.numHikers}, hiker ids:
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
