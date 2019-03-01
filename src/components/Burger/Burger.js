import React from 'react'

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

/**
 * Burger component
 *
 * @author dayneko_si
 * @since 27.02.2019
 * @param props
 */
const  burger = (props) => {
    const updatedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            /* needed because we have different number of ingredients*/
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i}  type={ingKey} />
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            { updatedIngredients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger