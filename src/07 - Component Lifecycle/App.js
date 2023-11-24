import { useState } from 'react';
import Counter from './Counter';
import logo from '../logo.svg';
import '../App.css';

function App() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Counter' : 'Show Counter'} 
      </button>
      <br />
      {isShown ? <Counter /> : null}
    </>
  );
}

export default App;
