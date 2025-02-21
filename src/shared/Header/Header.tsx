import React from 'react';
import {Link} from "react-router";
import s from './Header.module.scss'
import logo from '../../assets/cloudy.png'
import theme from '../../assets/theme.svg'

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <div className={s.nav}>
                <Link className={s.nav_link} to={'/'}>
                    <img className={s.logo__img} src={logo} alt="logo"/>
                    <h2 className={s.logo__title}> React Weather</h2>
                </Link>
                <div className={s.nav}>
                    <img className={s.theme} src={theme} alt="theme"/>
                    <input className={s.select} type="search"/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Header;