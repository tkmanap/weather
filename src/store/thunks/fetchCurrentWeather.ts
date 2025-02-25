import {AppDispatch} from "../store.ts";
import {weatherService} from "../../services/weatherService.ts";
import {currentWeatherSlice} from "../slices/currentWeatherSlice.ts";

export const fetchCurrentWeather =
    (payload: string) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
                const res = await weatherService.getCurrentWeather(payload)
                if (res.status === 200) {
                    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
                } else {
                    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))

                }
            } catch (error) {
                console.log(error)
            }
        }