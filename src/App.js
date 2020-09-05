import React from 'react';
import './App.scss';

import Countdown from './components/Countdown';

const App = () => {
  return (
    <div className="wrapper">
      <Countdown date="November 25 2023 12:44 GMT+2" />
    </div>
  );
}

export default App;
