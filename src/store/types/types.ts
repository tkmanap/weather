export interface WeatherItem {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
}

export type Weather = {
    id: number;
    name: string;
    weather: WeatherItem[];
    main: MainWeatherData[];
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    rain?: {
        "1h": number;
    };
    clouds: {
        all: number;
    };
    timezone: number;
};

export interface ForecastItem {
    dt: number;
    main: MainWeatherData[];
    weather: WeatherItem[];
    clouds: { all: number };
    wind: { speed: number; deg: number };
    visibility: number;
    pop: number;
    rain?: { "3h": number };
}

export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastItem[];
    city: {
        id: number;
        name: string;
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
}
