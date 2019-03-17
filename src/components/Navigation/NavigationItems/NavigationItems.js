import React from 'react'

import classes from './NavigationItems.css'
import NavigationItem from "../NavigationItem/NavigationItem";

/**
 * Navbar component
 *
 * @author dayneko_si
 * @since 17.03.2019
 * @returns {*}
 */
const navigationItems = () => (
    <ul className = { classes.NavigationItems }>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;