import React from 'react'

import  classes from './Modal.css'
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

/**
 * Modal window hoc component
 *
 * @author dayneko_si
 * @sinse 05.03.2019
 * @param props
 * @returns {*}
 */
const modal = (props) => (
    <Aux>
        <Backdrop
            show    = { props.show }
            clicked = { props.modalClosed }
        />
        <div
            className = { classes.Modal }
            style = {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >{ props.children } </div>
    </Aux>
);

export default modal;