import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <MyButton onClick={handleClick}>Click Me!</MyButton>
  );
}

function handleClick(event) {
  console.log('clicked');
  console.log(event);
}

function MyButton( props ) {
  return (
    <button 
      {...props}
      style={{
        color: 'red'
      }} />
  );
}

export default App;
