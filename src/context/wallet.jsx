import { createContext, useEffect, useState } from 'react';
import { connection } from '../service/api';

export const WalletContext = createContext({});

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    connection.get('/json/all')
    .then((res) => {
      console.log(res.data);
      setWallet(res.data);
    })
  })

  return <WalletContext.Provider value={ wallet }>
    {children}
  </WalletContext.Provider>;
}
