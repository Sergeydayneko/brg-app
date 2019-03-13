import React from 'react'

import burgerLogo from "../../assets/images/burger-logo.png"
import classes from './Logo.css'

/**
 * Logo component
 *
 * @author dayneko_si
 * @since 13.03.2019
 * @param props
 */
const logo = (props) => (
    <div className = { classes.Logo }>
        <img src = { burgerLogo } alt="Brg-app"/>
    </div>
)

export default logo;