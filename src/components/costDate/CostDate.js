import './CostDate.css'

const CostDate = (props) => {
    const date = new Date(props.date);

    const month = date.toLocaleString('en-us', { month: 'long' });
    const year = date.getFullYear();
    const day = date.getDate();

    return (
        <div className='date-container'>
            <p className='month'>{month}</p>
            <p className='year'>{year}</p>
            <h2 className='day'>{day}</h2>
        </div>
    );
}

export default CostDate;