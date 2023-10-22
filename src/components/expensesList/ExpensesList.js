import React, {useState} from 'react';

import CostItem from "../costItem/CostItem";
import CostYearPicker from '../costYearPicker/CostYearPicker';
import Card from '../card/Card';
import './ExpensesList.css';

const ExpensesList = (props) => {
    const options = [...new Set(props.data.map((e) => new Date(e.date).getFullYear()))]
        .map(e => ({ 
            value: e,
            label: e 
        }));

    const [selectedYear, setSelectedYear] = useState(options[0].value);

    const changeYearHandler = (value) => {
        setSelectedYear(+value);
    }
    return (
        <Card>
            <div className='picker-container'>
                <h4>Expenses Year:</h4>
                <CostYearPicker 
                    options={options} 
                    value={selectedYear} 
                    onChange={changeYearHandler}
                />
            </div>
            <div className='expenses-list'>
                {props.data
                    .filter((e) =>  new Date(e.date).getFullYear() === selectedYear)
                    .map((e) => 
                        <CostItem 
                            key={e.title}
                            date={e.date}
                            title={e.title}
                            amount={e.amount}
                        />
                    )}
            </div>
        </Card>
    );
}

export default ExpensesList;