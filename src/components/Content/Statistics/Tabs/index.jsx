import { useState } from 'react';
import Button from '../../../UI/Button';
import st from './Tabs.module.scss';
const Tabs = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={st.container}>
            <div className={st.left__block}>
                <Button isActive={isActive}>На неделю</Button>
                <Button isActive={isActive}>На месяц</Button>
                <Button isActive={isActive}>На 10 дней</Button>
            </div>
            <div className={st.right__block}>
                <Button>Отменить</Button>
            </div>
        </div>
    );
};

export default Tabs;
