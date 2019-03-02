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
    let updatedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            /* needed because we have different number of ingredients*/
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i}  type={ingKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (updatedIngredients.length === 0 ) {
        updatedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            { updatedIngredients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger