import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from "./containers/BuilderBuilder/BurgerBuilder";

/**
 * Верхний layout приложения
 *
 *
 * @author dayneko_si
 * @since 23.02.2019
 */
class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <BurgerBuilder />
            </Layout>
        </div>

    );
  }
}

export default App;
