import React, { Component } from 'react';
import {Nav, NavLink, Input} from 'reactstrap';
import VerticalCard from './verticalCard'
export default class Solutions extends Component {
  render() {
    return (
      <div>
        <h1>Our solutions</h1>
        <hr/>
     
        <div className= "global-solution-container">
            <div className="nav-container">   
                <Input style ={{width:'80%', margin:'auto',marginTop:10, textAlign:"center"}} placeHolder = 'Search'/>
                    <Nav vertical>
                        <NavLink href="#business_subsection">Business</NavLink>
                        <NavLink href="#">Education</NavLink>
                        <NavLink href="#">Personal and Home</NavLink>
                        <NavLink href="#">Pricing</NavLink>
                    </Nav>
            </div>
            <div className="content-container">
            <h1 className="solution-header-text">Business Suite</h1> 
                <div id="business_subsection">
                    <VerticalCard/>
                </div>
            </div>
    </div>
    </div>
    )
  }
}
