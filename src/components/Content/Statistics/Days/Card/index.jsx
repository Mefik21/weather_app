import st from './Card.module.scss';
import * as helpers from '../../../../../helpers';
const Card = ({ data }) => {
    return (
        <div className={st.container}>
            <div className={st.top__block}>
                <span className={st.day__week}>{helpers.getValueDay(data.date)}</span>
                <span className={st.day__month}>{helpers.formatDate(data.date, 'DD MMM')}</span>
            </div>
            <div className={st.middle__block}>
                <img src={data.day.condition.icon} alt="" />
            </div>
            <div className={st.bottom__block}>
                <div className={st.temp}>Макс. температура днем: {data.day.maxtemp_c.toFixed(0)}</div>
                <div className={st.temp__feeling}>Мин. температура днем: {data.day.mintemp_c.toFixed(0)}</div>
                <div className={st.precipitation}>{data.day.condition.text}</div>
            </div>
        </div>
    );
};

export default Card;
