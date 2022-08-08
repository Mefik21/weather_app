import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    city: 'krasnodar',
    cityRU: 'Краснодар',
    weather: {},
    isLoading: true,
    response: {
        status: 0,
        message: ''
    }
};

export const weatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            };
        },
        fetchCurrentWeatherError(state, action) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            };
        },
        setCity(state, action) {
            state.city = action.payload.value;
            state.cityRU = action.payload.label;
        }
    }
});

export default weatherSlice.reducer;
