import React, { Component } from  'react'
import Aux from '../../hoc/Aux'

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
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;