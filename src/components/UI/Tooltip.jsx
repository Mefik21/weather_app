import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/translucent.css';

const Tooltip = ({ children, ...rest }) => (
    <Tippy theme="light" {...rest}>
        {children}
    </Tippy>
);
Tooltip.defaultProps = {
    animation: 'fade',
    arrow: true,
    delay: 0,
    trigger: 'mouseenter'
    // theme: 'translucent',
    // placement: 'top', // Зачем это, если по умолчанию placement auto?
};

export default Tooltip;
