import {AppDispatch} from "../store.ts";
import {forecastWeatherSlice} from "../slices/forecastWeatherSlice.ts";
import {weatherService} from "../../services/weatherService.ts";

export const fetchForecastWeather =
    (payload: string) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(forecastWeatherSlice.actions.fetchForecastWeather());
                const res = await weatherService.getForecastWeather(payload);
                if (res.status == 200) {
                    dispatch(forecastWeatherSlice.actions.fetchForecastSuccess(res))
                } else {
                    dispatch(forecastWeatherSlice.actions.fetchForecastError(res))
                }
            } catch (error) {
                console.log(error)
            }
        }