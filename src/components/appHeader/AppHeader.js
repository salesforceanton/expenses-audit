import './AppHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' 

const AppHeader = (props) => {
    return (
        <div className='app-header'>
            <h2>Expenses Audit  <FontAwesomeIcon icon={faCoffee} /></h2>
            {props.showNewButton && <button className='open-modal-button' onClick={props.openNewCostModalHandler}>Add new cost</button>}
        </div>
    );
}

export default AppHeader;