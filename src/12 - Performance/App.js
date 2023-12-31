import { useState } from 'react';
import MyButton from './MyButton';
import logo from '../logo.svg';
import '../App.css';

function App() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  return (
    <>
      <h1>Fib {num} is {fib(num)}</h1>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />

      <br />
      <br />

      <input
        type="text"
        value={logValue}
        onChange={(event) => setLogValue(parseInt(event.target.value))}
      />

      <MyButton onClick={() => {
        console.log(logValue);
      }}>Log Value</MyButton>
    </>
  );
}

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib (n -  2);
}

export default App;
