import React from 'react';
import s from './Weeks.module.css'

interface Itab {
    value: string
}


const Tabs: React.FC = () => {
    const tabs: Itab[] = [
        {value: 'На неделя'},
        {value: 'На 10 дней'},
        {value: 'На месяц'},
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    );
};

export default Tabs;