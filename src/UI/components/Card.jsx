import style from "./Card.module.css"

const Card = ({title, content}) => {
    return (
        <div className={style.main}>
            <span style={{fontWeight: "bold", fontSize: "1.3vw"}}>{title}</span>
            <span>{content}</span>
        </div>
    );
}

export default Card;