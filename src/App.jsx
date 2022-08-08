import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Header from './components/Header';
import DayStat from './components/Content/DayStat';
import Statistics from './components/Content/Statistics';

import { fetchCurrentWeather } from './store/thunks/fetchCurrentWeather';

import st from './App.module.scss';

const App = () => {
    const dispatch = useDispatch();

    const { city, isLoading } = useSelector((state) => state.weatherSlice);

    useEffect(() => {
        dispatch(fetchCurrentWeather(city));
    }, []);

    useEffect(() => {
        dispatch(fetchCurrentWeather(city));
    }, [city]);

    return (
        <div className={st.app}>
            <div className={st.wrapper}>
                <Header />
                {!isLoading && (
                    <div>
                        <DayStat />

                        <Statistics />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
