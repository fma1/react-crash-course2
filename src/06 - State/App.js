import { useReducer, useState } from 'react';
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
  //const [ count, setCount ] = useState(0);
  //const [ value, setValue ] = useState('');
  const [ state, dispatch ] = useReducer(reducer, {
    count: 0
  });

  return (
    <>
{/*
      <Counter startingCount={10} />
      <Counter />
*/}
{/* Counter is now a controlled component because it is taking setter func as prop
and using whatever the parent says as its method for what it does when it clicks */}
{/*
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
*/}
      <Counter count={state.count}
        onClick={() => dispatch({
          type: 'increment',
          num: 1
        })} />
      <Counter count={state.count}
        onClick={() => dispatch({
          type: 'decrement',
          num: 1
        })} />
{/* Another example of a controlled component */}
{/*
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)} />
*/}
    </>
  );
}

// function Counter({ count, setCount }) {
// function Counter({ startingCount = 0 }) {
function Counter({ count, onClick }) {
  // Never mutate count directly
  //const [ count, setCount ] = useState(startingCount);
  /*
   * If we give an object to useState as initial value
   * we must give setCount a new object in order to re-render
   */
  // const [ count, setCount ] = useState({ num: startingCount });
  return (
    <>
{/*
      <button onClick={() => {
         // count will not update until Counter finishes rendering
         // so all 3 calls have the same value for count
         setCount(count + 1);
         setCount(count + 1);
         setCount(count + 1);
        // Will batch together and not re-render until updated all state
        //setOtherCount(count + 1);
        // Need new object to be given to setCount
        setCount({ num: count + 1 );
        setCount({...count, otherCount: 0 );
      }}>
        Increment
      </button>
*/}
      <button onClick={onClick}>
        Increment/Decrement
      </button>
      <p>Count: {count}</p>
    </>
  );
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + action.num};
    case 'decrement':
      return {count: state.count - action.num};
    default:
      throw new Error('Unknown action type');
  }
}

export default App;
