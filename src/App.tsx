import React from 'react';
import './index.css';
import { FirstExample } from './1.useState/useState';
import { SecondExample } from './2.customState/customState';
import { ThirdExample } from './3.useEffect/useEffect';
import { FourthComponent } from './4.useContext/useContext';
import { FifthExample } from './5.useRef/useRef';

const App = () => {
  return (
    <div className="App">
      <div className="area">
        useState Example
        <FirstExample />
      </div>
      <div className="area">
        customState Example
        <SecondExample />
      </div>
      <div className="area">
        useEffect Example
        <ThirdExample />
      </div>
      <div className="area">
        useContext Example
        <FourthComponent />
      </div>
      <div className="area">
        useRef Example
        <FifthExample />
      </div>
    </div>
  );
};

export default App;
