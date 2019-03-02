import React from 'react';
import classes from './BuildControl.css'

/**
 * Build control component class
 * for adding ingredients
 *
 * @author dayneko_si
 * @sinse 02.03.2019
 * @param props
 * @returns {*}
 */
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
);

export default buildControl