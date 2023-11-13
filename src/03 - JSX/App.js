import logo from '../logo.svg';
import '../App.css';

function App() {
/*
  const name = 'Conner';
  return (
    <>
      <h1>Hello {name.toUpperCase()}</h1>
      <p>Test</p>
    <>
  );
*/
/*
  const error = true;
  return (
    <>
      {error && <h1>Error</h1>}
      {!error ? <h1>Success</h1> : null}
    </>
  );
*/
/*
  const props = {
    id: 'input',
    type: 'text',
    maxLength: 3
  };

  return (
    <>
      <label htmlFor="input">Input: </label>
      <input {...props} placeholder="user" />
    </>
  );
*/
  return <p style={{
    color: 'red',
    textAlign: 'center',
    fontSize: '48px'
  }}>Hello World</p>
}

export default App;
