import React, { useContext } from 'react';
import { Button } from 'antd';
import { MyContext } from './MyContext';

export const DecrementComponent = () => {
  const { state, setState } = useContext<IContextValue>(MyContext);
  return (
    <>
      <div>DecrementComponent</div>
      <div>{state}</div>
      <Button type="primary" onClick={() => setState(state - 1)}>
        DECREMENT
      </Button>
    </>
  );
};
