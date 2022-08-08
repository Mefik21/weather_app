import st from './Button.module.scss';

const Button = ({ children, ...rest }) => {
    return (
        <button className={rest.isActive ? st.active : st.button} {...rest}>
            {children}
        </button>
    );
};

export default Button;
