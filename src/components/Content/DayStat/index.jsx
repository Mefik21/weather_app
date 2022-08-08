import { useSelector } from 'react-redux';

import ThisDay from './ThisDay';
import ThisDayInfo from './ThisDayInfo';

import st from './DayStat.module.scss';

const DayStat = () => {
    const { cityRU,weather } = useSelector((state) => state.weatherSlice);

    return (
        <div className={st.container}>
            <ThisDay weather={weather} city={cityRU} />
            <ThisDayInfo weather={weather} />
        </div>
    );
};

export default DayStat;
