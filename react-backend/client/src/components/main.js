import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import mainContainer from './mainContainer';
// import Checkout from './checkout';
import Home from './pages/home'
import About from './pages/about';
import Projects from './pages/projects';
import Solutions from './pages/solutions';
import Education from './pages/education';
import Contact from './pages/contact'

const Main = () => (
    <main>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/solutions" component = {Solutions}/>
            <Route exact path = "/projects" component = {Projects}/>
            <Route exact path = "/education" component = {Education}/>
            <Route exact path = "/contact" component = {Contact}/>
        </Switch>
    </main>
)

export default Main;
