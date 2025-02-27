import s from './Day.module.css'
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
                    <div className={s.today__title}>
                        {weather.weather[0].description}
                    </div>
                </div>
                <div>
                    <img className={s.today__img}
                         src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                         alt="sun"/>
                </div>
            </div>

            <div className={s.today__bottom}>
                <div className={s.today__time}>
                    Время: <span>{weather.timezone}</span>
                </div>
                <div className={s.today__place}>
                    Город: <span>{weather.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Day;