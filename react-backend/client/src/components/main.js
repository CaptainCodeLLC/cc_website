import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import mainContainer from './mainContainer';
// import Checkout from './checkout';
import Home from './pages/home'
import About from './pages/about';

const Main = () => (
    <main>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About}/>
        </Switch>
    </main>
)

export default Main;
