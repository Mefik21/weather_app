import { useSelector } from 'react-redux';
import st from './Days.module.scss';
import Card from './Card';

const Days = () => {
    const { weather } = useSelector((state) => state.weatherSlice);
    console.log(weather);
    return (
        <div className={st.container}>
            {weather.forecast.forecastday.map((day) => (
                <Card data={day}/>
            ))}
        </div>
    );
};

export default Days;
