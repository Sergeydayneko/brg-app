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
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            <BurgerIngredient type={"cheese"}/>
            <BurgerIngredient type={"meat"}/>
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default burger