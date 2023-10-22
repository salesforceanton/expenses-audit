import './Modal.css';

const Modal = (props) => {
    const backdropClickHandler = (e) => {
        e.stopPropagation();
        props.onBackdropClick();
    }
    const modalClickHandler = (e) => {
        e.stopPropagation();
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className='backdrop' onClick={backdropClickHandler}>
            <div className='modal' onClick={modalClickHandler}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;