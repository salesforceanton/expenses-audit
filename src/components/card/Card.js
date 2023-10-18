import './Card.css'

const Card = (props) => {
    const styles = `${props.className} card`;
    return <div className={styles}>{props.children}</div>
}

export default Card;