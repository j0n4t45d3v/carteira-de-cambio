import { createContext, useEffect, useState } from 'react';
import { connection } from '../service/api';

export const WalletContext = createContext({});

export function WalletProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wallet = {
    currencies,
    expenses,
  };

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
  }

  function removeExpense(expense) {
    const newExpenses = expenses.filter((item) => item !== expense);
    setExpenses(newExpenses);
  }

  function moneyUsed(money) {
    let value = 0;

    currencies.forEach((currency) => {
      if (currency.code === money) {
        value = Number(currency.low);
      }
    });
    return value.toFixed(2);
  }

  return (
    <WalletContext.Provider
      value={{ wallet, pushExpense, moneyUsed, expenses }}
    >
      {children}
    </WalletContext.Provider>
  );
}
