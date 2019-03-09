import React from 'react'

import classes from './Button.css'

/**
 * Custom button component
 *
 * @author dayneko_si
 * @since 09.03.2019
 * @param props
 */
const button = (props) => {
    return (
        <button
            className = { [classes.Button, classes[props.btnType]].join(" ") }
            onClick   = { props.clicked }
        >{ props.children }</button>
    );
}

export default button;