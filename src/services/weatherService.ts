import {AxiosResponse} from "axios"
import {Forecast, Weather} from "../store/types/types.ts";
import api from "../axios";

export class weatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`, {
            params: {
                lang: 'ru',
                units: 'metric'
            }
        })
    }

    static async getForecastWeather(city: string): Promise<AxiosResponse<Forecast>> {
        const response = await api.get<Forecast>(`/forecast?q=${city}`, {
            params: {
                lang: 'ru',
                units: 'metric'
            }
        });
        const timezoneOffset = response.data.city.timezone; // Смещение в секундах
        const filteredData: Record<string, any> = {}; // Храним только по 1 прогнозу на день
        response.data.list.forEach(entry => {
            const date = new Date((entry.dt + timezoneOffset) * 1000); // Учитываем смещение
            const day = date.toISOString().split("T")[0]; // Получаем YYYY-MM-DD

            if (!filteredData[day]) {
                filteredData[day] = entry; // Берём первый прогноз дня
            }
        });
        response.data.list = Object.values(filteredData).slice(0, 5); // Берём первые 5 дней
        return response;
    }
}