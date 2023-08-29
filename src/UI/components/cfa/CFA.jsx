import style from './CFA.module.css'
import checkMark from "../../../images/check_mark.png";

const CFA = ({cfa, clkUsr, clkCfa, css}) => {
    return (
        <div className={style.main} style={css}>
            <div className={style.info} onClick={clkUsr}>
                <div className={style.info_contract}>
                    <span>{cfa.title}</span>
                    <div className={style.verif_info}>
                        <img src={checkMark} alt="" draggable="false"/>
                        <span>{cfa.owner.transactions.successfully}</span>
                    </div>
                </div>
                <div className={style.info_user}>
                    <span>{cfa.owner.username}</span>
                    <span>Кол-во транзакций: {cfa.owner.transactions.count}</span>
                </div>
            </div>
            <div className={style.additional_info} onClick={clkCfa}>
                <div>
                    <span>{cfa.title}</span>
                    <span>{cfa.price.count} {cfa.price.currency}</span>
                </div>
                <button>buy</button>
            </div>
        </div>
    );
}

export default CFA;