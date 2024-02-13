import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTransaction({
            amount: parseFloat(amount),
            description
        });

        setAmount('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Kiadás (Ft): </label>
                <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Mire: </label>
                <input 
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </div>
            <button type="submit">Hozzáad</button>
        </form>
    );
};

export default TransactionForm;
