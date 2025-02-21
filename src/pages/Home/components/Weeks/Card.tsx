import React from 'react';
import s from './Weeks.module.scss'
import {Day} from "./Weeks.tsx";
import {GlobalSvgSelector} from "../../../../assets/icons/Global/GlobalSvgSelector.tsx";

interface CardProps {
    day: Day
}

const Card: React.FC<CardProps> = ({day}) => {
    const {weeks, day_info, temp_day, temp_night, info} = day
    return (
        <div className={s.card}>
            <div className={s.day__weeks}>{weeks}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.icon}>
                <GlobalSvgSelector id={day.icon_id} key={day.icon_id}/>
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};

export default Card;