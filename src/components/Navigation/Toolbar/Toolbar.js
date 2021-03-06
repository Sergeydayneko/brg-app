import React from 'react';

import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

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
        <DrawerToggle clicked = { props.drawerToggleClicked }/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className = { classes.DesktopOnly } >
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;