import React from "react";
import s from './Day.module.css'
import sun from '../../../../assets/sun.svg'

const Day: React.FC = () => {
    return (
        <div className={s.today}>

            <div className={s.today__top}>
                <div className={s.today__top_wrapper}>
                    <div className={s.today__temp}>20°</div>
                    <div className={s.today__title}>Сегодня</div>
                </div>
                <div>
                    <img className={s.today__img} src={sun} alt="sun"/>
                </div>
            </div>

            <div className={s.today__bottom}>
                <div className={s.today__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={s.today__place}>
                    Город: <span>Санкт-Петербург</span>
                </div>
            </div>
        </div>
    );
};

export default Day;