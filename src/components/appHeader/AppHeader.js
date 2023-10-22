import './AppHeader.css';

const AppHeader = (props) => {
    return (
        <div className='app-header'>
            <h2>Expenses Audit</h2>
            <button className='open-modal-button' onClick={props.openNewCostModalHandler}>Add new cost</button>
        </div>
    );
}

export default AppHeader;