import * as helpers from '../../../../helpers';
import st from './ThisDayInfo.module.scss';

import windIcon from '../../../../assets/image/icons/wind.svg';
import precipitationIcon from '../../../../assets/image/icons/precipitation.svg';
import pressureIcon from '../../../../assets/image/icons/pressure.svg';
import tempIcon from '../../../../assets/image/icons/temp.svg';

const ThisDayInfo = ({ weather }) => {

    const { current } = weather;
    
    return (
        <div className={st.container}>
            <div className={st.row}>
                <img src={tempIcon} className={st.icon} alt="" />
                <span className={st.title}>Температура</span>
                <span className={st.description}>
                    {current.temp_c}° - ощущается как {current.feelslike_c}°
                </span>
            </div>

            <div className={st.row}>
                <img src={pressureIcon} className={st.icon} alt="" />
                <span className={st.title}>Давление </span>
                <span className={st.description}>
                    {helpers.convertPressure(current.pressure_mb)} мм ртутного столба
                </span>
            </div>

            <div className={st.row}>
                <img src={precipitationIcon} className={st.icon} alt="" />
                <span className={st.title}>Осадки</span>
                <span className={st.description}>{current.condition.text}</span>
            </div>

            <div className={st.row}>
                <img src={windIcon} className={st.icon} alt="" />
                <span className={st.title}>Ветер</span>
                <span className={st.description}>{current.wind_mph} м/с {helpers.translateWindDirection(current.wind_dir)}</span>
            </div>
        </div>
    );
};

export default ThisDayInfo;
