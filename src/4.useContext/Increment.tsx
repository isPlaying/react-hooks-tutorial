import React, { useContext } from 'react';
import { Button } from 'antd';
import { MyContext } from './MyContext';

export const IncrementComponent = () => {
  const { state, setState } = useContext<IContextValue>(MyContext);
  return (
    <>
      <div>IncrementComponent</div>
      <div>{state}</div>
      <Button type="primary" onClick={() => setState(state + 1)}>
        INCREMENT
      </Button>
    </>
  );
};
