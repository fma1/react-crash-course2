import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

function App() {
  // Incorrect example
  /*
  let count = 0;
  return (
    <>
      <button onClick={() => count++}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
  */
  /*
  // Issue for useState() because React hooks can't be called conditionally
  // Hooks must be called exact same order on each render
  if (true) {
    return
  }
  */
  /*
   * Benefit of using a callback function is that if the computation
   * is expensive for the intial state, you want it inside a function so
   * it is not holding up the render every single time
   const [ count, setCount ] = useState(() => {
     return 0;
   });
   */
  // Never mutate count directly
  return (
    <>
      <Counter startingCount={10} />
      <Counter />
    </>
  );
}

function Counter({ startingCount = 0 }) {
  /*
   * If we give an object to useState as initial value
   * we must give setCount a new object in order to re-render
   */
  const [ count, setCount ] = useState(startingCount);
  return (
    <>
      <button onClick={() => {
        /*
         * count will not update until Counter finishes rendering
         * so all 3 calls have the same value for count
         setCount(count + 1);
         setCount(count + 1);
         setCount(count + 1);
        // Will batch together and not re-render until updated all state
        //setOtherCount(count + 1);
         */
        setCount(prevCount => prevCount + 1);
      }}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

export default App;
