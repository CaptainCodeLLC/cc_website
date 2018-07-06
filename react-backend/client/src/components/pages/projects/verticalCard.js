import React, { Component } from 'react'
import {Button,ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
export default class VerticalCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {

    
    return (
      <div className = "vertical-card">
        <div className = "card-icon" >
          <img src={this.props.src} alt="?"/>
        
        </div>
        <div className="card-title">{this.props.title}</div>
        <div className="card-description">{this.props.description}</div>
       {/*<div className="card-features">
        <ul>
          <li type = "none">
            <p>- hello?</p>
          </li>
          <li type = "none">
            <p>- hello?</p>
          </li>
          <li type = "none">
            <p>- hello?</p>
    </li>
        </ul>
        <hr/>
        
        </div>
        * <div className="card-pricing">${this.props.pricing}
        </div> *
          <div className="button-container">
           <Button toggle={this.toggle} color = "success">Contact us</Button> <br/>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
              More Information
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>*/}
           </div>
    )
  }
}
