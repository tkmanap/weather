import React from 'react';
import s from './Popup.module.scss'
import DayItem from "../../pages/Home/components/DayInfo/DayItem.tsx";
import {Item} from "../../pages/Home/components/DayInfo/DayInfo.tsx";
import {GlobalSvgSelector} from "../../assets/icons/Global/GlobalSvgSelector.tsx";


export const Popup: React.FC = () => {
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
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.popup__day}>
                    <div className={s.day}>
                        <div className={s.day__temp}>20°</div>
                        <div className={s.day__title}>Среда</div>
                        <div className={s.icon}>
                            <GlobalSvgSelector id='sun' />
                        </div>
                        <div className={s.day__time}>
                            Время: <span>21:54</span>
                        </div>
                        <div className={s.day__place}>
                            Город: <span>Санкт-Петербург</span>
                        </div>
                    </div>
                </div>

                <div className={s.this__day_info_items}>
                    {items.map((item: Item) => (
                        <DayItem key={item.icon_id} item={item}/>
                    ))}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>

    );
};

