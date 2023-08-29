import style from "./NavBar.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const [links, setLinks] = useState(
        [
            {title: "маркет", clicked: false, link: "/cfa"},
            {title: "продавцы", clicked: false, link: "/users"},
            {title: "новости и особенности", clicked: false, link: ""},
            {title: "научиться торговать", clicked: false, link: ""},
            {title: "о нас", clicked: false, link: ""}
        ]
    );
    const [checker, setChecker] = useState(-1);
    const navigate = useNavigate();

    function click(idx) {
        if(checker > -1) {
            links[checker].clicked = false;
        }
        setChecker(idx);
        links[idx].clicked = true;
        setLinks(links);
        navigate(links[idx].link);
    }

    return (
        <div className={style.main}>
            <div className={style.links}>
                {links.map((link, idx) => <div onClick={() => click(idx)} key={idx} className={style.link}><span style={link.clicked ? {color: "green", fontWeight: "bold"} : {}}>{link.title}</span></div>)}
            </div>
            <div className={style.user_state}></div>
        </div>
    );
}

export default NavBar;
