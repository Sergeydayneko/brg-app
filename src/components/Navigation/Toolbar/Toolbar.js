import React from 'react';

import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";

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
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;