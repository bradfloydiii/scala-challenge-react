import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/Store';

export const AddHiker = () => {
  const { addHiker } = useContext(StoreContext);

  // local state vars and methods
  const [id, setId] = useState(0);
  const [speed, setSpeed] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newHiker = {
      _id: id,
      speed,
    };
    addHiker(newHiker);

    // reset component state
    setId(0);
    setSpeed(0);
  };

  return (
    <div className='col'>
      <h4>Add New Hiker</h4>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Hiker Id:</label>
          <br />
          <input
            type='number'
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder='Enter Id...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Hiker Speed:</label>
          <br />
          <input
            type='number'
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            placeholder='Enter hiker speed...'
          />{' '}
          ft./minute
        </div>
        <br />
        <button className='btn'>Add New Hiker</button>
      </form>
    </div>
  );
};