import Select from 'react-select';

import st from './CustomSelect.module.scss';

const CustomSelect = (props) => {
    return <Select className={st.select} {...props} />;
};

export default CustomSelect;
