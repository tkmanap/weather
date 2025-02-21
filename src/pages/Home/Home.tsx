import s from './Home.module.scss'
import React from "react";
import Day from "./components/Day/Day.tsx";
import DayInfo from "./components/DayInfo/DayInfo.tsx";
import Weeks from "./components/Weeks/Weeks.tsx";

export const Home: React.FC = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <Day/>
                <DayInfo/>
            </div>
            <div>
                <Weeks/>
            </div>
        </div>
    );
};