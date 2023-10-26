import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons' 

import CostItem from "../costItem/CostItem";
import CostYearPicker from '../costYearPicker/CostYearPicker';
import Card from '../common/card/Card';
import styles from './ExpensesList.module.css';
import ExpensesDiagram from '../expensesDiagram/ExpensesDiagram';

const ExpensesList = (props) => {
    const options = [...new Set([...props.data.map((e) => new Date(e.date).getFullYear()), new Date().getFullYear()])]
        .map(e => ({ 
            value: e,
            label: e 
        }));

    const [selectedYear, setSelectedYear] = useState(options[0].value);
    const filteredData = props.data.filter((e) =>  new Date(e.date).getFullYear() === selectedYear);

    const changeYearHandler = (value) => {
        setSelectedYear(+value);
    }
    return (
        <Card className={styles['card-wrapper']}>
            <div className={styles['picker-container']}>
                <h4>Expenses Year:</h4>
                <CostYearPicker 
                    options={options} 
                    value={selectedYear} 
                    onChange={changeYearHandler}
                />
            </div>
            {!filteredData.length 
                ?
                <div className={styles['empty-message']}>
                    <FontAwesomeIcon icon={faSackDollar} className={styles['empty-message__icon']}/>
                    <p>No expenses registered</p>
                </div> 
                :
                <div className={styles['expenses-list__container']}>
                    <div className={styles['diagram-wrapper']}>
                        <ExpensesDiagram data={filteredData}/>
                    </div>

                    <div className={styles['expenses-list']}>
                        {filteredData.map((e) => 
                            <CostItem 
                                key={e.title}
                                date={e.date}
                                title={e.title}
                                amount={e.amount}
                            />
                        )}
                    </div>
                </div>
            }
        </Card>
    );
}

export default ExpensesList;