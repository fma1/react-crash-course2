import logo from '../logo.svg';
import '../App.css';

function App() {
/*
  return (
    <>
      <h1>Hello Conner</h1>
      <h1>Hello Chris</h1>
    </>
  );
*/
/*
  return (
    <>
      <Hello name="Conner" />
      <Hello name="Chris" />
    </>
  );
*/
  return (
    <Comment username="Conner" time={new Date().toString()}>
      <h1>Hello World</h1>
      <p>This is a comment</p>
    </Comment>
  );
}

function Comment({username, time, children}) {
  return (
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  );
}

export default App;
