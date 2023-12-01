import { forwardRef, useRef, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

const MyInput = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} style={{color: 'red'}} />
});

// callback ref
// ref={} will only run on initial mount
// Also runs on unmount but passes in null instead of domNode
function handleRef(domNode) {
  console.log(domNode);
}

function App() {
/*
  const [seconds, setSeconds] = useState(0);
  // const [timerID, setTimerID] = useState(null);
  // Doesn't work because setInterval() causes re-render making it undefined
  // on all consecutive re-renders
  // let timerID;
  // Persists across renders but changing the value does not cause a re-render
  const timerID = useRef(null);

  const startTimer = () => {
// setTimerID() is suboptimal because causing an unnecessary re-render
// We could possible use a useState({current: null}) and keep using the same object
// to avoid a re-render
//     setTimerID(setInterval(() => {
//       setSeconds(currSeconds => currSeconds + 1);
//     }, 1000));

    timerID.current = setInterval(() => {
      setSeconds(currSeconds => currSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerID.current);
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>seconds: {seconds}</p>
    </>
  );
*/
  const inputRef = useRef(null);
  // inputRef.current does not get set until after initial render
  // So can't be used on initial render
  console.log("inputRef.current: " + inputRef.current);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      {/* React sets inputRef.current to be the DOM node associated with this JSX element */}
      {/* ref attributes by default can only be added to DOM nodes and not custom components */}
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <br />
      <MyInput ref={handleRef} />
    </>
  );
}

export default App;
