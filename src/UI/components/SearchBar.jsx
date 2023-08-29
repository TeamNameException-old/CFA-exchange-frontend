import style from "./SearchBar.module.css";
import search from "../../images/search.gif";
import {useRef} from "react";

const SearchBar = ({enter}) => {
    const inp = useRef();

    function input(e) {
        if(e.key === "Enter" && enter) {
            enter(inp.current.value);
        }
    }

    return (
        <div className={style.main} draggable="false">
            <img draggable="false" src={search} alt="" />
            <input ref={inp} placeholder="Search" onKeyUp={input} />
        </div>
    );
}

export default SearchBar;