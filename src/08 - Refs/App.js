import { useReducer, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

function App() {
  const [seconds, setSeconds] == useState(0);

  const startTimer = () => {
    setInterval(() => {
      setSeconds(currSeconds => currSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {

  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>seconds: {seconds}</p>
    </>
  );
}

export default App;
