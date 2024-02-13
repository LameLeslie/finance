import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <div>
            <h2>Tranzakciók</h2>
            <ul>
                {transactions.map((transaction, index) => (
                <li key={index}>
                   {transaction.description} - {transaction.amount} Ft
                </li>
            ))}
            </ul>
        </div>
    );
};

export default TransactionList;