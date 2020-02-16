import React from 'react';
import './App.css';
import logo from './assets/acnh-logo.png';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <img src={logo} className='ac-logo' alt='Animal Crossing Logo'/>
      <Countdown />
    </div>
  );
}

export default App;
