import { createContext, useState } from 'react';

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    course: null
  }
});

const bill = {
  name: 'Bill',
  course: 'English'
};

const joe = {
  name: 'Joe',
  course: 'Math'
};

export function UserContextProvider({children}) {
  const [user, setUser] = useState(bill);

  const toggleUser = () => {
    if (user === bill) {
      setUser(joe);
    } else {
      setUser(bill);
    }
  }

  return (
    <UserContext.Provider value={{
      user,
      toggleUser
    }}>
      {children}
    </UserContext.Provider>
  );
}
