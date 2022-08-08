import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const DropdownTippy = ({ children, ...rest }) => (
    <Tippy className={'bg-white border-radius-6 profile-dropdown-menu'} {...rest}>
        {children}
    </Tippy>
);
DropdownTippy.defaultProps = {
    animation: 'fade',
    arrow: false,
    delay: 0,
    trigger: 'click',
    interactive: true
};

export default DropdownTippy;
