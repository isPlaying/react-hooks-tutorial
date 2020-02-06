import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { IncrementComponent } from './Increment';
import { DecrementComponent } from './Decrement';
import { MyContext } from './MyContext';

export const FourthComponent = () => {
  const [state, setState] = useState<number>(0);
  return (
    <>
      <Row type="flex" justify="center">
        <div>COUNT: {state}</div>
      </Row>
      <Row type="flex" justify="space-around">
        <MyContext.Provider value={{ state, setState }}>
          <Col className="gutter-row">
            <IncrementComponent />
          </Col>
          <Col className="gutter-row">
            <DecrementComponent />
          </Col>
        </MyContext.Provider>
      </Row>
    </>
  );
};
