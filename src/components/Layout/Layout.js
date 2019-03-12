import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";

/**
 * Stateless component для инициализации внешнего
 * слоя со всеми компонентами
 *
 * @author dayneko_si
 * @sinse 23.02.2019
 * @param props
 * @returns {*}
 */
const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

