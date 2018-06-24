import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from './src/components/assets/CC_logo.png';

export default class nav extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
			<img src={require('./assets/CC_logo.png')} width="30" height="30" alt=""/>
			{/*<img src='CC_logo.png' width="30" height="30" alt=""/>*/}
			</a>
			{/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
				  <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
				  <a className="nav-item nav-link" href="#">Blog</a>
				  <a className="nav-item nav-link" href="#">Projects</a>
				  <a className="nav-item nav-link" href="#">Contact</a>
				  <a className="nav-item nav-link" href="#">Projects</a>
				</div>
  </div>*/}
		</nav>
      </div>
    );
  }
}