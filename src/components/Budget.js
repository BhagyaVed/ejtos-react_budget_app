
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
   
    const [ newBudget, setBudget ] = useState(budget);

    const ref = useRef(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

  
    // console.log(remaning);
    // const alertType = totalExpenses > newBudget ? alert('You cannot reduce the budget value lower than the spending') : 'alert=success'

    const handleSubmit = (e) => {
        setBudget(ref.current.value);
       
        if(ref.current.value > 20000){
            const remaning = budget - totalExpenses;
            alert('The value cannot excced remaning funds ' + currency + remaning);
        }

        if(totalExpenses > ref.current.value){
            alert('You cannot reduce the budget value lower than the spending');
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: ref.current.value
        });
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