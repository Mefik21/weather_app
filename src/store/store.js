import { configureStore, combineReducers } from '@reduxjs/toolkit';

import weatherSlice from './slices/weatherSlice';

const rootReducer = combineReducers({
    weatherSlice
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
