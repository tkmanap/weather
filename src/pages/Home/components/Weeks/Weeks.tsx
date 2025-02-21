import React from 'react';
import s from './Weeks.module.scss'
import Card from "./Card.tsx";
import Tabs from "./Tabs.tsx";

export interface Day {
    weeks: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

const Weeks: React.FC = () => {
    const days: Day[] = [
        {
            weeks: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            weeks: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            weeks: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            weeks: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            weeks: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            weeks: 'Сб',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            weeks: 'Вс',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];

    return (
        <>
            <Tabs/>
            <div className={s.weeks}>
                {
                    days.map((day: Day) =>
                        <Card day={day} key={day.weeks}/>
                    )
                }
            </div>
        </>
    );
};

export default Weeks;