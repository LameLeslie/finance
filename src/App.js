import './App.css';
import React, { useState, useEffect } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setBalance(data.balance);
        setTransactions(data.transactions);
      });
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setBalance(balance + transaction.amount);

    fetch('http://webprogramozas.inf.elte.hu/hallgatok/gd49z1/react/build2/updateData.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `amount=${transaction.amount}&description=${transaction.description}`
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // A válasz a szervertől
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getDay() === 1 && now.getHours() === 0 && now.getMinutes() === 0) {
        addTransaction({ amount: 38600, description: 'Fix összeg' });
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [transactions, addTransaction]);

  return (
    <div className="divClass">
      <h1 className='h1'>Költségkövető</h1>
      <Balance balance={balance} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
