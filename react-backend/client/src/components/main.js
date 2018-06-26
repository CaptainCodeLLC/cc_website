import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import mainContainer from './mainContainer';
// import Checkout from './checkout';
import Home from './pages/home/index'
import About from './pages/about/index';
import Projects from './pages/projects/index';
import Solutions from './pages/solutions/index';

const Main = () => (
    <main>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/solutions" component = {Solutions}/>
            <Route exact path = "/projects" component = {Projects}/>
        </Switch>
    </main>
)

export default Main;
