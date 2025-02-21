import s from './Home.module.scss'
import React from "react";
import Day from "./components/Day/Day.tsx";

export const Home: React.FC = () => {
    return (
        <div className={s.home}>
            <Day />
        </div>
    );
};