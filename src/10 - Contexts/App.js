import { useState } from 'react';
import Profile from './Profile';
import logo from '../logo.svg';
import '../App.css';

const bill = {
  name: 'Bill',
  course: 'English'
};

const joe = {
  name: 'Joe',
  course: 'Math'
};

function App() {
  const [user, setUser] = useState(bill);

  const toggleUser = () => {
    if (user === bill) {
      setUser(joe);
    } else {
      setUser(bill);
    }
  }

  return (
    <>
      <main>
        <Profile user={user} />
        <button onClick={toggleUser}>Toggle User</button>
      </main>
    </>
  );
}

export default App;
