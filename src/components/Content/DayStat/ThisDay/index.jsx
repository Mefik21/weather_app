import st from './ThisDay.module.scss';

import dayjs from 'dayjs';
import { useState } from 'react';
import useInterval from '../../../../hooks/useInterval';

const ThisDay = ({ weather, city }) => {
    const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm'));

    const { current } = weather;

    useInterval(() => {
        setCurrentTime(dayjs().format('HH:mm'));
    }, 60000);

    return (
        <div className={st.container}>
            <div className={st.top__block}>
                <div className={st.top__block_info}>
                    <span className={st.top__block_temp}>{current.temp_c}°</span>
                    <span className={st.top__block_day}>Сегодня</span>
                </div>
                {/* TODO заменить изображение с api на svg по коду */}
                <img className={st.top__block_img} src={current.condition.icon} alt="Погода" />
            </div>
            <div className={st.bottom__block}>
                <span className={st.bottom__block_time}>Время: {currentTime}</span>
                <span className={st.bottom__block_city}>Город: {city}</span>
            </div>
        </div>
    );
};

export default ThisDay;
