import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import React, { Component } from 'react'


/**
 * Stateless component для инициализации внешнего
 * слоя со всеми компонентами
 *
 * @author dayneko_si
 * @sinse 23.02.2019
 * @param props
 * @returns {*}
 */
class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open = { this.state.showSideDrawer }
                            closed = { this.sideDrawerClosedHandler }/>
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default Layout;

