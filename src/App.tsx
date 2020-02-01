import React from 'react';
import './index.css';
import { FirstExample } from './1.useState/useState';
import { SecondExample } from './2.customState/customState';
import { ThirdExample } from './3.useEffect/useEffect';

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
    </div>
  );
};

export default App;
