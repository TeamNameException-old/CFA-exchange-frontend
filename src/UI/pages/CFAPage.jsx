import {useParams} from "react-router";
import {useEffect, useState} from "react";
import CFA from "../components/cfa/CFA";
import {useNavigate} from "react-router-dom";
import {cfa} from "../../network/api";
import SearchBar from "../components/SearchBar";
import style from "./CFAPage.module.css";
import ProfileCover from "../components/ProfileCover";
import Card from "../components/Card";
import File from "../components/File";

const CFAPage = ({isCfaView}) => {
    const navigate = useNavigate();
    const params = useParams();
    const [listCfa, setListCfa] = useState([]);
    const [cfaMain, setCfaMain] = useState();

    useEffect(() => {
        if (!isCfaView) {
            setListCfa(cfa().items);
        } else {
            setCfaMain(cfa(params.cfaId));
        }
    }, [isCfaView, params.cfaId]);

    function searchCfa(search) {
        setListCfa(cfa().items.filter(cfa => new RegExp(search, "i").test(cfa.title)));
    }

    return (
        <div>
            {!isCfaView ?
                <div className={style.main}>
                    <div className={style.search}><SearchBar enter={(text) => searchCfa(text)}/></div>
                    {listCfa.map(cfa => <CFA
                        key={cfa.id}
                        css={{margin: ".4vw 0"}}
                        cfa={cfa} clkUsr={() => navigate(`/users/${cfa.owner.id}`)}
                        clkCfa={() => navigate(`/cfa/${cfa.id}`)}/>)}
                </div> : undefined}
            {isCfaView && cfaMain ?
                <div className={style.info}>
                    <div className={style.user_info}>
                        <div className={style.user}>
                            <ProfileCover color="blue" firstChar={cfaMain.owner.username[0]}/>
                            <div className={style.description}>
                                <span style={{
                                    marginBottom: "1vw",
                                    fontSize: "1.3vw",
                                    fontWeight: "bold"
                                }}>{cfaMain.owner.username}</span>
                                <span>Был(а) {cfaMain.owner.online.last} с. назад | Зарегистрирован(а) {cfaMain.owner.registration.date}</span>
                            </div>
                        </div>
                        <div className={style.user_activity}>
                            <Card title="Все сделки" content={cfaMain.owner.transactions.count + " Раз(а)"}/>
                            <Card title="Сделок за 1 м." content={cfaMain.owner.activity.month.orders + " Раз(а)"}/>
                            <Card title="Выполн. сделок за 1 м."
                                  content={cfaMain.owner.activity.month.successfully}/>
                            <Card title="Ср. время перевода"
                                  content={cfaMain.owner.activity.average.time.seconds.transfer + " Секунд(ы)"}/>
                            <Card title="Ср. время оплаты"
                                  content={cfaMain.owner.activity.average.time.seconds.payment + " Секунд(ы)"}/>
                        </div>
                    </div>
                    <div className={style.cfa_info}>
                        <File title={cfaMain.file.contract.name}
                            downloadLink={cfaMain.file.contract.download.link}/>
                        <div className={style.buy_cfa}>
                            <span>{cfaMain.price.count} {cfaMain.price.currency}</span>
                            <button>buy</button>
                        </div>
                    </div>
                </div>
                : undefined}
        </div>
    );
}

export default CFAPage;
