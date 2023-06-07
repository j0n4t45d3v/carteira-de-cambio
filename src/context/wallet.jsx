import { createContext, useEffect, useState } from 'react';
import { connection } from '../service/api';

export const WalletContext = createContext({});

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    connection.get('/json/all').then((res) => {
      const keys = Object.keys(res.data);

      const filter = keys.filter((key) => key !== 'USDT');

      const currencies = filter.map((key) => {
        return res.data[key];
      });
      setWallet({ currencies: currencies, expenses: [] });

      // console.log(wallet);
    });
  }, []);


  return (
    <WalletContext.Provider value={{wallet}}>{children}</WalletContext.Provider>
  );
}
