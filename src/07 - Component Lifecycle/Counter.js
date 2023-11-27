import { useEffect, useLayoutEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

// React Component Lifecycle
// Mount (initial render) -> updates (re-render) -> unmount

function Counter() {
  const [ count, setCount ] = useState(0);
  // Boolean not being used for anything, just for component to re-render
  const [ bool, setBool ] = useState(false);

  useEffect(() => {
    console.log('mounted');

    return () => console.log('unmount');
  }, []);

  useEffect(() => {
    console.log('count changed');

    return () => console.log('cleanup count changed');
  }, [count]);

// Infinite loop
/*
  useEffect(() => {
    // So doesn't crash browser
    if (count > 20) return;
    setCount(count + 1);
  }, [count]);
*/

  useEffect(() => {
    console.log('pressed re-render');
  }, [bool]);

  useEffect(() => {
    console.log('render');
  });

  useEffect(() => {
    console.log('mounted');
  }, []);

  // Causes flash of 3
  /*
  useEffect(() => {
    if (count === 3) {
      setCount(4);
    }
  }, [count]);
  */

  // runs synchronously after render
  // not painted to screen until useLayoutEffect has finished running
  useLayoutEffect(() => {
    if (count === 3) {
      setCount(4);
    }
  }, [count]);


  // Create extra delay to see flash of count of 3
  const startTime = new Date();
  while (new Date() - startTime < 100) {}

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
