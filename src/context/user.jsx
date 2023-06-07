import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>
    {children}
  </UserContext.Provider>;
}
