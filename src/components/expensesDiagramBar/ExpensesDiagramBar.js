import './ExpensesDiagramBar.css';

const ExpensesDiagramBar = ({ item, maxValue }) => {
    const maxValueHeight = 10;
    const value = `${maxValueHeight * item.total / maxValue}rem`;
    
    return (
        <div className='diagram-bar_wrapper'> 
            <p>{item.total !== 0 ? item.total : ''}</p>
            <div style={{ height: value }}></div>
            <p>{item.label}</p>
        </div>
    );
}

export default ExpensesDiagramBar;