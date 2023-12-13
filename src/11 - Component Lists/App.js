import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  return (
    <>
      <ul>
        {/* TODO */}
      </ul>

      <br />

      <input type="text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)} />

      <button onClick={() => {
        setItems([...items, newItem]);
        setNewItem('');
      }}>
        Add List Item
      </button>
    </>
  );
}

export default App;
