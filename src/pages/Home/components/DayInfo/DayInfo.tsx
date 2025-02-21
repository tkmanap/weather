import React from 'react';
import s from './DayInfo.module.scss'
import DayItem from "./DayItem.tsx";


export interface Item {
    icon_id: string,
    title: string,
    value: string
}

const DayInfo: React.FC = () => {
    const items = [
        {
            icon_id: 'temp',
            title: 'Температура',
            value: '20° - ощущается как 17°'
        },
        {
            icon_id: 'pressure',
            title: 'Давление ',
            value: '765 мм ртутного столба - нормальное°'
        },
        {
            icon_id: 'precipitation',
            title: 'Осадки',
            value: 'Без осадков'
        },
        {
            icon_id: 'wind',
            title: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
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