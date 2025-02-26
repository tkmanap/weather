import {AxiosResponse} from "axios"
import {Weather} from "../store/types/types.ts";
import api from "../axios";

export class weatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`,{
            params: {
                lang: 'ru'
            }
        })
    }

    static getForecastWeather(city: string)
}