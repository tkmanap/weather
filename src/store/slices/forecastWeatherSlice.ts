import {Forecast} from "../types/types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";

type ForecastState = {
    forecast: Forecast | []
    isLoading: boolean
    response: Response
}

type Response = {
    status: number
    message: string
}

const initialState: ForecastState = {
    forecast: {
        cod: 0,
        message: 0,
        cnt: 0,
        list: [
            {
                dt: 0,
                main: { temp: 0, feels_like: 0, pressure: 0, humidity: 0 },
                weather: [{ id: 0, main: 'main-temp', description: 'descr', icon: 'weather-icon' }],
                clouds: { all: 0 },
                wind: { speed: 0, deg: 0 },
                visibility: 0,
            }
        ],
        city: {
            id: 0,
            name: '',
            country: '',
            timezone: ''
        }
    }
}

export const forecastWeatherSlice = createSlice({
    name: 'forecast_weather',
    initialState,
    reducers: {
        fetchForecastWeather(state) {
            state.isLoading = true
        },
        fetchForecastSuccess(
            state,
            action: PayloadAction<AxiosResponse<Forecast>>
        ) {
            state.forecast = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchForecastError(
            state,
            action: PayloadAction<AxiosResponse<Forecast>>
        ) {
            state.forecast = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
    }
})

export default forecastWeatherSlice.reducer