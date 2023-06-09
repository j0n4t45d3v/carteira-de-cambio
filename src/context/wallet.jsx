import { createContext, useEffect, useState } from 'react';
import { connection } from '../service/api';

export const WalletContext = createContext({});

export function WalletProvider({ children }) {
  const [currencies, setCurrencies] = useState({});
  const [expenses, setExpenses] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wallet = {
    currencies,
    expenses,
  }

  useEffect(() => {
    connection.get('/json/all').then((res) => {
      const keys = Object.keys(res.data);

      const filter = keys.filter((key) => key !== 'USDT');

      const currencies = filter.map((key) => {
        return res.data[key];
      });
      setCurrencies(currencies);
    });
  }, [wallet]);

  function pushExpense(expense) {
    setExpenses([...expenses, expense]);
    console.log(wallet);
  }

  return (
    <WalletContext.Provider value={{ wallet, pushExpense }}>
      {children}
    </WalletContext.Provider>
  );
}
