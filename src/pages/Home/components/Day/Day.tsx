import s from './Day.module.css'
import sun from '../../../../assets/image/sun.svg'
import {Weather} from "../../../../store/types/types.ts";

interface DayProps {
    weather: Weather
}


const Day = ({weather}: DayProps) => {
    return (
        <div className={s.today}>
            <div className={s.today__top}>
                <div className={s.today__top_wrapper}>
                    <div className={s.today__temp}>{Math.floor(weather.main.temp)}°</div>
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
                    Город: <span>{weather.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Day;