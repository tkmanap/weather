import React from 'react';
import {Item} from "./DayInfo.tsx";
import s from "./DayInfo.module.scss";
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector.tsx";

interface DayItemProps {
    item: Item;
}

const DayItem: React.FC<DayItemProps> = ({item}) => {
    const { icon_id, title, value } = item;

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator__name}>{title}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};

export default DayItem;