
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenses, currency } = useContext(AppContext);

    const [ newBudget, setBudget ] = useState(budget);

    const ref = useRef(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    // const alertType = totalExpenses > newBudget ? alert('You cannot reduce the budget value lower than the spending') : 'alert=success'

    const handleSubmit = (e) => {
        setBudget(ref.current.value);

        if(newBudget > 20000){
            alert('Value cannot excced 20000');
        }

        if(totalExpenses > newBudget){
            alert('You cannot reduce the budget value lower than the spending');
        }
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}  
                <input type="number" ref={ref} value={newBudget} onChange={handleSubmit} step='10' style={{width: '150px'}}></input> 
            </span>
        </div>
    );
};

export default Budget;