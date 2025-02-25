export type Weather = {
    id: number
    name: string
    weather: {
        main: string,
        description: string
    }
    main: {
        temp: number,
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
    }

}