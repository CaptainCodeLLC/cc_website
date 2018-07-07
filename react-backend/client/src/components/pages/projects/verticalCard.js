import React, { Component } from 'react'

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
     
           </div>
    )
  }
}
