import React, { Component } from 'react'
import {Button} from 'reactstrap';
export default class VerticalCard extends Component {
  render() {

    
    return (
      <div className = "vertical-card">
        <div className = "card-icon" >
          <img src={this.props.src} alt="?"/>
        
        </div>
        <div className="card-title">{this.props.title}</div>
        <div className="card-description">{this.props.description}</div>
        <div className="card-features">
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
        <div className="card-pricing">${this.props.pricing}
        </div>
          <div className="button-container">
           <Button color = "success">Contact us</Button>  <Button color = "primary">More </Button>
           </div>
        </div>
    )
  }
}
