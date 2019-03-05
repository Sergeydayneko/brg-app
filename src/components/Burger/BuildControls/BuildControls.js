import React from 'react'

import classes from './BuildCrontrols.css'
import BuildControl from "./BuildControl/BuildControl";

/** All control types **/
const controls = [
    { label: 'Salad',  type: 'salad' },
    { label: 'Bacon',  type: 'bacon' },
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat',   type: 'meat'  }
];

const buildControls = (props) => (
    <div className = { classes.BuildControls }>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        { controls.map(control => {
            return <BuildControl
                key   = { control.label }
                label = { control.label }
                type  = { control.type }
                // added={props.ingredientAdded}
                added   = { () => props.ingredientAdded(control.type) }
                removed = { () => props.ingredientRemoved(control.type) }
                disableRemoveButton = { props.disabledRemove[control.type] }
            />
          })
        }
        <button
            className = { classes.OrderButton }
            disabled  = { props.orderPurchasable }
            onClick   = { props.ordered }
        > MAKE ORDER </button>
    </div>
);

export  default buildControls