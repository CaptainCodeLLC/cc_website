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

//Code to check if express is working properly

/*class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;*/






