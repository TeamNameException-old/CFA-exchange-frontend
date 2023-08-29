import style from "./File.module.css";
import file from "../../images/file.gif"
import {useNavigate} from "react-router-dom";

const File = ({title, downloadLink}) => {
    const navigate = useNavigate();

    return (
        <div className={style.main}>
            <div className={style.nav}>
                <span>Файл ЦФА | {title}</span>
            </div>
            <div className={style.mid}>
                <img draggable="false" src={file} alt="" />
            </div>
            <div className={style.bot}>
                <button onClick={() => navigate(downloadLink)}>скачать</button>
            </div>
        </div>
    );
}

export default File;
