import React from 'react';
import {Link} from "react-router";
import s from './Header.module.scss'
import logo from '../../assets/image/logo.png'
import {GlobalSvgSelector} from "../../assets/icons/Global/GlobalSvgSelector.tsx";
import {useTheme} from "../../hooks/useTheme.ts";
import {Theme} from "../../context/ThemeContext.ts";
import SelectCity from "../SelectCity/SelectCity.tsx";

const Header: React.FC = () => {
    const theme = useTheme()

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <div className={s.header}>
            <div className={s.nav}>
                <Link className={s.nav_link} to={'/'}>
                    <img className={s.logo__img} src={logo} alt="logo"/>
                    <h2 className={s.logo__title}>Weather</h2>
                </Link>
                <div className={s.nav}>
                    <div className={s.change__theme} onClick={changeTheme}>
                        <GlobalSvgSelector id="change-theme"/>
                    </div>
                    <SelectCity/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Header;