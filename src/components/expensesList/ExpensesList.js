import './ExpensesList.css';
import CostItem from "../costItem/CostItem";

function ExpensesList(props) {
    return (
        <div className='expenses-list'>
            {props.data.map((e) => 
                <CostItem 
                    key={e.title}
                    date={e.date}
                    title={e.title}
                    amount={e.amount}
                />
            )}
        </div>
    );
}

export default ExpensesList;