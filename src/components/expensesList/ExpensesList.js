import './ExpensesList.css';
import CostItem from "../costItem/CostItem";
import Card from '../card/Card';

const ExpensesList = (props) => {
    return (
        <Card className='expenses-list'>
            {props.data.map((e) => 
                <CostItem 
                    key={e.title}
                    date={e.date}
                    title={e.title}
                    amount={e.amount}
                />
            )}
        </Card>
    );
}

export default ExpensesList;