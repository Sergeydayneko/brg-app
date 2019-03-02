import React from 'react'

import classes from './BuildCrontrols.css'
import BuildControl from "./BuildControl/BuildControl";

/** All control types **/
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        { controls.map(control => {
            return <BuildControl
                key={control.label}
                label={control.label}
                type={control.type}
                // added={props.ingredientAdded}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disableRemoveButton={props.disabledRemove[control.type]}
            />
          })
        }
    </div>
);

export  default buildControls