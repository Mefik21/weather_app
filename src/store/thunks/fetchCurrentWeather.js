import { WeatherService } from '../../services/WeatherService';
import { weatherSlice } from '../slices/weatherSlice';

export const fetchCurrentWeather = (payload) => async (dispatch) => {
    try {
        dispatch(weatherSlice.actions.fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload);
        if (res.status === 200) {
            dispatch(weatherSlice.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(weatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (error) {
        console.log(error);
    }
};
