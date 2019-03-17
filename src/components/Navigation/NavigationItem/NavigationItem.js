import React from 'react'

import classes from './NavigationItem.css'

/**
 * Component of navbar
 *
 * @author dayneko_si
 * @since 17.03.2019
 * @param props
 * @returns {*}
 */
const navigationItem = (props) => (
    <li className = { classes.NavigationItem }>
        <a
            href      = { props.link }
            className = { props.active ? classes.active : null }
        >{ props.children }</a>
    </li>
);

export default navigationItem

