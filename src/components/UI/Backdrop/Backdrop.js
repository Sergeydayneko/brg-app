import React from 'react'

import classes from './Backdrop.css'

/**
 * Backdrop component.
 * Needed when modal windows is used
 *
 * @param props
 */
const backdrop = (props) => (
    props.show ? <div
        className = { classes.Backdrop }
        onClick   = { props.clicked }
    ></div> : null
);

export default backdrop;