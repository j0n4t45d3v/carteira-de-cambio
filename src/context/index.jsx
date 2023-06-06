import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function addUser(user) {
    setUser(user);
  }

  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>
    {children}
  </UserContext.Provider>;
}
