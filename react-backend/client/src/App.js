import React, { Component } from 'react';
import './App.css';

import Nav from './components/nav';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>

        <Main id="landing"/>
      </div>
    );
  }
}

export default App;


