import React from 'react';

import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

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
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;