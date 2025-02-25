import s from './Home.module.scss'
import React, {useEffect} from "react";
import Day from "./components/Day/Day.tsx";
import DayInfo from "./components/DayInfo/DayInfo.tsx";
import Weeks from "./components/Weeks/Weeks.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/store.ts";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather.ts";
import {selectCurrentWeatherData} from "../../store/selector.ts";

export const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const {weather, } = useAppSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'));
    }, [dispatch]);
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