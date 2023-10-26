import ExpensesDiagramBar from '../expensesDiagramBar/ExpensesDiagramBar';
import styles from './ExpensesDiagram.module.css';

const ExpensesDiagram = (props) => {
    const initialData = [
        { label: 'Jan', total: 0 },
        { label: 'Feb', total: 0 },
        { label: 'Mar', total: 0 },
        { label: 'Apr', total: 0 },
        { label: 'May', total: 0 },
        { label: 'Jun', total: 0 },
        { label: 'Jul', total: 0 },
        { label: 'Aug', total: 0 },
        { label: 'Sep', total: 0 },
        { label: 'Oct', total: 0 },
        { label: 'Nov', total: 0 },
        { label: 'Dec', total: 0 },
    ];

    const preparedData = props.data.reduce((res, item) => {
        const costMonth = new Date(item.date).getMonth();
        res[costMonth].total = +res[costMonth].total + item.amount;
        return res;
    }, initialData);

    const maxValue = Math.max(...preparedData.map((e) => e.total));

    return (
        <div className={styles['diagram-content_wrapper']}>
            {preparedData.map((item) => 
                <ExpensesDiagramBar 
                    item={item} 
                    key={item.label} 
                    maxValue={maxValue} 
                />
            )}
        </div>
    );
}

export default ExpensesDiagram;