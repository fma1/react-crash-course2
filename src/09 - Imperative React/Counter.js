import { useState, forwardRef, useImperativeHandle } from 'react';
import logo from '../logo.svg';
import '../App.css';

export default forwardRef(function Counter(props, ref) {
  const [ count, setCount ] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      reset: () => setCount(0)
    }
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <p>Count: {count}</p>
    </>
  );
});
