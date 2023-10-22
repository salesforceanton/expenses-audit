import React, {useState} from 'react';

import ExpensesList from "./components/expensesList/ExpensesList";
import NewCostForm from "./components/newCostForm/NewCostForm";

function App() {
    const initialCostData = [
        {
            date: new Date(),
            title: 'X-Box Series-S',
            amount: 425.50
        },
        {
            date: new Date(),
            title: 'Jagerrmasster',
            amount: 19.99
        },
        {
            date: new Date(),
            title: 'Car repair work',
            amount: 278.50
        }
    ];

    const [costData, setCostData] = useState(initialCostData);

    const addCostHandler = (input) => setCostData((prevState) => [input, ...prevState]);
    
    return (
        <div>
            <h2>Expenses Audit</h2>
            <NewCostForm onAddCost={addCostHandler}/>
            <ExpensesList data={costData}/>
        </div>
        
    )
    
}

export default App;
