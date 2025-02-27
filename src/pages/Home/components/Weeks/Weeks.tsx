import React from 'react';
import s from './Weeks.module.scss'
import Card from "./Card.tsx";
import {useAppSelector} from "../../../../hooks/store.ts";
import {selectForecastWeatherData} from "../../../../store/selector.ts";


const Weeks: React.FC = () => {
    const {forecast} = useAppSelector(selectForecastWeatherData)
    return (
        <>
            <div className={s.weeks}>
                {forecast?.list?.map((item) => item && <Card key={item.dt} item={item}/>)}
            </div>
        </>
    );
};

export default Weeks;