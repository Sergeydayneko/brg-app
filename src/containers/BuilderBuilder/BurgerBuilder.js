import React, { Component } from  'react'
import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

/**
 * Основной компонент приложения
 *
 * @author dayneko_si
 * @since 23.02.2019
 */
class BurgerBuilder extends Component {
    /* instead of constructor */
    state = {
        ingredients: {
            salad: 0,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }

}

export default BurgerBuilder;