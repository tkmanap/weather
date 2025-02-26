import s from './Home.module.scss'
import React from "react";
import Day from "./components/Day/Day.tsx";
import DayInfo from "./components/DayInfo/DayInfo.tsx";
import Weeks from "./components/Weeks/Weeks.tsx";
import {useAppSelector} from "../../hooks/store.ts";
import {selectCurrentWeatherData, selectForecastWeatherData} from "../../store/selector.ts";

export const Home: React.FC = () => {

    const {weather} = useAppSelector(selectCurrentWeatherData)
    const {forecast} = useAppSelector(selectForecastWeatherData)

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <Day weather={weather}/>
                <DayInfo/>
            </div>
            <div>
                {forecast?.list.map((item) => (
                    <div key={item.dt}>
                        <p>Дата: {new Date(item.dt * 1000).toLocaleString()}</p>
                        <p>Температура: {item.main.temp}°C</p>
                        <p>Погода: {item.weather[0].description}</p>
                    </div>
                ))}
            </div>
            <div>
                <Weeks/>
            </div>
        </div>
    );
};