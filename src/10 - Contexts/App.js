import { useContext } from 'react';
import Profile from './Profile';
import { UserContext, UserContextProvider } from './UserContext';
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
  );
}

function AppInternal() {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}

export default App;
