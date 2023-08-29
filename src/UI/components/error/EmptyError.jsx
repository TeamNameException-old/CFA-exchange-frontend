import style from "./EmptyError.module.css";
import warn from "../../../images/warn.gif";

const EmptyError = () => {
    return (
        <div className={style.main}>
            <img src={warn} alt=""/>
            <span>Здесь пока ничего нет, но скоро будет!</span>
        </div>
    );
}

export default EmptyError;
