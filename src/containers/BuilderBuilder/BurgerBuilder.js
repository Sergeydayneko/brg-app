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

    render() {
        return (
            <Aux>
                <Burger />
            </Aux>
        );
    }

}

export default BurgerBuilder;