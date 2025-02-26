import s from '../Header/Header.module.scss'
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/store.ts";

import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather.ts";
import {fetchForecastWeather} from "../../store/thunks/fetchForecastWeather.ts";

const cities = [
    {value: "Moscow", label: "Москва"},
    {value: "London", label: "Лондон"},
    {value: "New York", label: "Нью-Йорк"},
    {value: "Tokyo", label: "Токио"}
];

const SelectCity = () => {
    const dispatch = useAppDispatch()
    const [city, setCity] = useState<string>(() => {
            return localStorage.getItem('selectedCity') || 'London'
        }
    )

    useEffect(() => {
        dispatch(fetchCurrentWeather(city));
        dispatch(fetchForecastWeather(city))
    }, [city, dispatch]);

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
        localStorage.setItem("selectedCity", selectedCity);
    };

    return (
        <select value={city} onChange={handleCityChange} className={s.select}>
            {cities.map(({value, label}) => (
                <option key={value} value={value} label={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export default SelectCity;