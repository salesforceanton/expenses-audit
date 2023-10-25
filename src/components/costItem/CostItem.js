import './CostItem.css';
import CostDate from '../costDate/CostDate';
import Card from '../common/card/Card';

const CostItem = (props) => {
    const date = props.date

    return <Card className='content-wrapper'>
            <CostDate date={date}/>
            <div className='description'>
                <h3 className='title'>{props.title}</h3>
                <p className='price-container'>{props.amount}$</p>
            </div>
        </Card>
}

export default CostItem;