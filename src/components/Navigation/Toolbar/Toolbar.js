import React from 'react';

import classes from './Toolbar.css';

/**
 * Toolbar component
 *
 * @author dayneko_si
 * @since 12.03.2019
 * @param props
 * @returns {*}
 */
const toolbar = (props) => (
    <header className = { classes.Toolbar }>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;