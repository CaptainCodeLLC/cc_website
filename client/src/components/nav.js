import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from './Assets/CC_logo.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" id = "navbar-toggler"light expand="md">
        <NavbarBrand href="/" className="mr-auto" id = "navbar-brand-toggler">
						<img src={logo} alt ='' style = {{width:'2.5rem', float:'left'}}/>
           <span style = {{fontFamily:'Raleway', marginTop:-4, marginLeft:'4px', float:'left'}}>{'Captain Code'}</span>
					</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className = "navbar-link" href="/solutions">Solut ions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = "navbar-link" href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = "navbar-link" href="/research">Research</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = "navbar-link" href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = "navbar-link" href="/education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = "navbar-link" href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

