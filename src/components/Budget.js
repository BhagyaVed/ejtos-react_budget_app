
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenses } = useContext(AppContext);

    const [ newBudget, setBudget ] = useState( budget );
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const alertType = totalExpenses > newBudget ? alert('You cannot reduce the budget value lower than the spending') : 'alert=success'

    return (
        <div className="alert alert-secondary">
            <span>Budget: £
                <input type="number" max="20000" 
                onChange={(event) => setBudget(event.target.value)}></input>
            </span>
        </div>
    );
};

export default Budget;