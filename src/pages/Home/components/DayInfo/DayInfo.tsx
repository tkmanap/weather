import React from 'react';
import s from './DayInfo.module.scss'
import DayItem from "./DayItem.tsx";
import {useAppSelector} from "../../../../hooks/store.ts";
import {selectCurrentWeatherData} from "../../../../store/selector.ts";


export interface Item {
    icon_id: string,
    title: string,
    value: string
}

const DayInfo: React.FC = () => {
    const {weather} = useAppSelector(selectCurrentWeatherData)
    const items = [
        {
            icon_id: 'temp',
            title: 'Температура',
            value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}`
        },
        {
            icon_id: 'pressure',
            title: 'Давление ',
            value: `${weather.main.pressure} мбар`
        },
        {
            icon_id: 'precipitation',
            title: 'Осадки',
            value: weather.rain?.["1h"] ? `${weather.rain["1h"]} мм/ч` : "Нет осадков"
        },
        {
            icon_id: 'wind',
            title: 'Ветер',
            value: `${weather.wind.speed} м/c`
        }
    ]

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => (
                    <DayItem key={item.icon_id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default DayInfo;