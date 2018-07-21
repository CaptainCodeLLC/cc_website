import React, { Component } from 'react';

import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/global/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        a
        <Main id="landing"/>
        <Footer/>
      </div>
    );
  }
}

export default App;


