import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

// React Component Lifecycle
// Mount (initial render) -> updates (re-render) -> unmount

function Counter() {
  const [ count, setCount ] = useState(0);
  // Boolean not being used for anything, just for component to re-render
  const [ bool, setBool ] = useState(false);

  useEffect(() => {
    console.log('render');
  });

  return (
    <>
      <button onClick={() => setBool(!bool)}>Re-Render</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <p>Count: {count}</p>
    </>
  );
}

export default Counter;
