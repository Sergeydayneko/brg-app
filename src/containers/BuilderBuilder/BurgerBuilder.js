import React, { Component } from  'react'

import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


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
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: true,
        purchasing: false
    };

    /**
     * Change state corresponding on
     * ingredients value
     * 0  - disable
     * 1+ - enable
     */
    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).reduce((sum, key) => {
            return sum + ingredients[key]
        }, 0);

        this.setState({
            purchasable: sum > 0
        })
    };

    /**
     * Adding ingredient to the burger
     *
     * @param type of ingredient
     */
    addIngredientHandler = (type) => {

        const updatedCount       = this.state.ingredients[type] + 1;
        const newPrice           = this.state.totalPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice : newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount     = this.state.ingredients[type];
        const updatedCount = oldCount === 0 ? 0 : (oldCount - 1);

        const oldPrice     = this.state.totalPrice;
        const updatedPrice = oldCount === updatedCount ? oldPrice : oldPrice - INGREDIENT_PRICES[type];

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        this.setState({
          ingredients: updatedIngredients,
          totalPrice : updatedPrice
        });

        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
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

                <Modal show        = { this.state.purchasing }
                       modalClosed = { this.purchaseCancelHandler }
                >
                    <OrderSummary ingredients = { this.state.ingredients }/>
                </Modal>
                <Burger ingredients = { this.state.ingredients } />
                <BuildControls
                    price             = { this.state.totalPrice }
                    ingredientAdded   = { this.addIngredientHandler }
                    ingredientRemoved = { this.removeIngredientHandler }
                    disabledRemove    = { disabledInfo }
                    orderPurchasable  = { !this.state.purchasable }
                    ordered           = { this.purchaseHandler }  />
            </Aux>
        );
    }
}

export default BurgerBuilder;