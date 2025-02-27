import React from 'react';
import s from './Weeks.module.scss'
import {ForecastItem} from "../../../../store/types/types.ts";

interface CardProps {
    item: ForecastItem
}

const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Сегодня";
    if (date.toDateString() === tomorrow.toDateString()) return "Завтра";

    return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
    });
};

const Card: React.FC<CardProps> = ({item}) => {
    return (
        <div className={s.card}>
            <div className={s.day__weeks}>{formatDate(item.dt)}</div>
            <div className={s.icon}>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather-icon"/>
            </div>
            <div className={s.temp__day}>{Math.floor(item.main.temp)}°C</div>
            <div className={s.temp__night}>{Math.floor(item.main.feels_like)}°C</div>
            <div className={s.info}>{item.weather[0].description}</div>
        </div>
    );
};

export default Card;