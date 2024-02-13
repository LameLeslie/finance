import React from 'react';
import './balance.css';

const Balance = ({ balance }) => {
    return <h2 className='h2'>Aktuális Összeg: {balance}</h2>
};

export default  Balance;