import { useRef } from 'react';
import Counter from './Counter';
import CustomInput from './CustomInput';
import logo from '../logo.svg';
import '../App.css';

/*
 * Note: useImperativeHandle is an escape hatch
 * and getting away from declarative nature of React
 */

function App() {
  const counterRef = useRef();
  const customInputRef = useRef();

  return (
    <>
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="Type something..." />
      <br />
      <button onClick={() => {
        counterRef.current.reset();
        customInputRef.current.reset();
      }}>
        Reset
      </button>
    </>
  );
}

export default App;
