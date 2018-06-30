import React, { Component } from 'react';
import {Nav, NavLink, Input} from 'reactstrap';
import VerticalCard from './verticalCard'
export default class Solutions extends Component {
  render() {
    return (
      <div>
        <h1 className = "page-header">Our Solutions</h1>
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
            
            <div className = "solution-page-content">
                <h1 className="solution-header-text">Business Suite</h1> 
           <div className = "container">
            <div id="business_subsection">
                    <VerticalCard title = "object1" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {4.12}/>
                    <VerticalCard title = "object2" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {`400.20`}/>
                    <VerticalCard title = "object2" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {`2002.00`}/>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
  }
}
