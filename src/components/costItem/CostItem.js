import './CostItem.css';
import CostDate from '../costDate/CostDate';

function CostItem(props) {
    const date = props.date

    return <div className='content-wrapper'>
            <CostDate date={date}/>
            <div className='description'>
                <h3 className='title'>{props.title}</h3>
                <p className='price-container'>{props.amount}$</p>
            </div>
        </div>
}

export default CostItem;