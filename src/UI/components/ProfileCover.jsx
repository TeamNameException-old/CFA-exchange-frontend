import style from "./ProfileCover.module.css";

const ProfileCover = ({firstChar, lastChar, color}) => {
    return (
        <div className={style.main} style={{background: color}}>
            {firstChar + (lastChar ? lastChar : "")}
        </div>
    );
}

export default ProfileCover;
