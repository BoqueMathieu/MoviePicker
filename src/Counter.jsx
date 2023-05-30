import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <div >
      <h1 >  Vous avez sélectionné : {count < 2 ? count + 'film' : count + 'films'}</h1>

    </div>
  );
};

export default Counter;
