
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const budget = event.target.value;
        if (budget > 20000) {
            alert("the limit value is 20,000");
            setNewBudget("");
            return;
        }

        if (budget < totalExpenses) {
            alert("Budget cannot be lower than spending");
            setNewBudget(totalExpenses);
            return;
        }
        setNewBudget(budget);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
