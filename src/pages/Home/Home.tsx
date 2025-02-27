import s from './Home.module.scss'
import React from "react";
import Day from "./components/Day/Day.tsx";
import DayInfo from "./components/DayInfo/DayInfo.tsx";
import Weeks from "./components/Weeks/Weeks.tsx";
import {useAppSelector} from "../../hooks/store.ts";
import {selectCurrentWeatherData} from "../../store/selector.ts";

export const Home: React.FC = () => {

    const {weather} = useAppSelector(selectCurrentWeatherData)

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <Day weather={weather}/>
                <DayInfo/>
            </div>
            <div>
                <Weeks/>
            </div>
        </div>
    );
};