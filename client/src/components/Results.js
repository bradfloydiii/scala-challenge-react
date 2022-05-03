import React, { useContext } from 'react';
import { StoreContext } from '../context/Store';

export const Results = () => {
  const { hikers, bridges, getHikingData } = useContext(StoreContext);

  const fetchData = (e) => {
    e.preventDefault();
    getHikingData();
  };

  return (
    <div className='status'>
      <p>
        <button onClick={(e) => fetchData(e)}>Get Hiker Data</button>
      </p>
      
      {hikers.length > 0 && (
        <ul>
          {hikers.map((hiker) => (
            <li key={hiker._id}>
              {hiker._id}: {hiker.speed}
            </li>
          ))}
        </ul>
      )}

      {bridges.length > 0 && (
        <ul>
          {bridges.map((bridge) => (
            <li key={bridge._id}>
              {bridge.length}: {bridge.numHikers}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
