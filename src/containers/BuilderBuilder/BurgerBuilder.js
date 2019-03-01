import React, { Component } from  'react'
import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";

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
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;