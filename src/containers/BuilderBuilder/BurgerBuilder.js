import React, { Component } from  'react'
import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

/** costs of ingredients **/
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
};

/**
 * Основной компонент приложения
 *
 * @author dayneko_si
 * @since 23.02.2019
 */
class BurgerBuilder extends Component {
    /* instead of constructor(it is constructor) */
    state = {
        ingredients: {
            salad: 0,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    };

    /**
     * Adding ingredient to the burger
     *
     * @param type of ingredient
     */
    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            price: newPrice
        })
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount === 0 ? 0 : oldCount - 1;
        console.log("old = " + oldCount + " new = " + updatedCount)

        const oldPrice = this.state.price;
        const updatedPrice = oldCount === updatedCount ? oldPrice : oldPrice - INGREDIENT_PRICES[type];

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        this.setState({
          ingredients: updatedIngredients,
          price: updatedPrice
        })
    };


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        /* if count in lower than 0, we have to disable button */
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledRemove={disabledInfo}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;