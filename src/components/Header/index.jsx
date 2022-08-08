import Tooltip from '../UI/Tooltip';
import CustomSelect from '../UI/CustomSelect';

import { weatherSlice } from '../../store/slices/weatherSlice';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import logo from '../../assets/image/header_logo.svg';

import st from './Header.module.scss';

const options = [
    { value: 'moscow', label: 'Москва' },
    { value: 'saint-petersburg', label: 'Санкт-Петербург' },
    { value: 'krasnodar', label: 'Краснодар' }
];

const Header = () => {
    const dispatch = useDispatch();

    const { city, cityRU } = useSelector((state) => state.weatherSlice);

    function onChangeCity(objectCity) {
        dispatch(weatherSlice.actions.setCity(objectCity));
    }

    return (
        <header className={st.header}>
            <div className={st.logo}>
                <img src={logo} alt="logo" />
                <span>React ПОГОДА</span>
            </div>

            <div className={st.control}>
                {/* <Tooltip content="Сменить тему">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                    </svg>
                </Tooltip> */}

                <CustomSelect
                    onChange={onChangeCity}
                    options={options}
                    defaultValue={{ label: cityRU, value: city }}
                    placeholder="Выберите город"
                />
            </div>
        </header>
    );
};

export default Header;
