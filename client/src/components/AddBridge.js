import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/Store';

export const AddBridge = () => {
  const { isLoading, addBridge } = useContext(StoreContext);

  // local state vars and methods
  const [length, setLength] = useState('');
  const [numHikers, setNumHikers] = useState('');

  const generateId = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newBridge = {
      _id: generateId(),
      length,
      numHikers,
    };
    addBridge(newBridge);

    // reset component state
    setLength(0);
    setNumHikers(0);
  };

  return (
    <div className='col'>
      {!isLoading && <h4>Add New Bridge</h4>}
      {!isLoading && (
        <form onSubmit={onSubmit}>
          <div className='form-control'>
            <label htmlFor='text'>Bridge Length:</label>
            <br />
            <input
              type='number'
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder='length'
            />{' '}
            ft.
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Number of Hikers:</label>
            <br />
            <input
              type='number'
              value={numHikers}
              onChange={(e) => setNumHikers(e.target.value)}
              placeholder='hikers'
            />
          </div>
          <br />
          <button className='btn'>Add New Bridge</button>
        </form>
      )}
    </div>
  );
};
