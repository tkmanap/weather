import React from 'react';
import s from './MothStatistics.module.scss'
import {Link} from "react-router";


export const MonthStatistics: React.FC = () => {
    return (
        <div className={s.month}>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

