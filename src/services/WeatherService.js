import api from '../axios';

export class WeatherService {
    static getCurrentWeather(city) {
        return api.get(`/forecast.json?&days=5&q=${city}&lang=ru`);
    }
}
