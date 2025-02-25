interface WeatherItem {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type Weather = {
    id: number
    name: string
    weather: WeatherItem[],
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    rain: {
        "1h": number
    },
    clouds: {
        all: number
    },
    timezone: number

}