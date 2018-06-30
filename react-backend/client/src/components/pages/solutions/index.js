import React, { Component } from 'react';
import {Nav, NavLink, Input, Form, FormGroup, Label } from 'reactstrap';
import SolutionCard from './SolutionCard';
import VerticalCard from './verticalCard';
import Carousel from './Carousel';
import StandardCard from './Card';

export default class Solutions extends Component {
    
  render() {

    return (
      <div>
        <h1 className = "page-header">Our Solutions</h1>
        <hr/>
     
        <div className= "global-solution-container">
            <div id="business-nav-container">   
                <Input style ={{width:'80%', margin:'auto',marginTop:10, textAlign:"center"}} placeHolder = 'Search'/>
                    <Nav vertical>
                        <NavLink href="#business_subsection">Business</NavLink>
                        <NavLink href="#education_subsection">Education</NavLink>
                        <NavLink href="#home_subsection">Personal and Home</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                    </Nav>
            </div>
            
            <div className = "solution-page-content">
            <div id="business_subsection"></div>
                <h1 className="solution-header-text">Business Suite</h1> 
           <div className = "content-subsection">
            <div id="business_subsection">
                    <VerticalCard title = "object1" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {4.12}/>
                    <VerticalCard title = "object2" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {`400.20`}/>
                    <VerticalCard title = "object2" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {`2002.00`}/>
                </div>
            </div>

            <div className="content-subsection">
                <div id = "education_subsection">
                    <h1>Education</h1>
                    <p>
                        At Captain Code we believe that technology education will provide individuals with the foundation to pursue top paying and the most rewarding careers in the world. 
                    </p>
                    <div>
                        <Carousel/>
                    </div>
                </div>
            </div>
            <div className="content-subsection">
                <div id = "home_subsection">
                    <h1>Home and Personal</h1>
                    <p>
                        Leverage cutting edge technology to make your home and appliances work around your life.
                    </p>
                    <div id="home-personal-container">
                        <SolutionCard/>
                        <SolutionCard/>
                        <SolutionCard/>
                    </div>
                </div>
            </div>
            <div className="content-subsection">
                <div id="pricing">
                    <h1>Pricing</h1>
                    <div className = "container" id="basic-products-subsection">
                        <h4>Standard solutions</h4>
                        <div id="products">
                            <StandardCard/>
                        </div>
                    </div>
                    <p>Everyones project is different, tell us a little more about what you want to build and we'll reach out within the next 24 hours!</p>
                    <Form>
                        <FormGroup>

                                <Input className = "pricing-input" type="email" name="first-name" id="first-name" placeholder="First name" />
                                <Input className = "pricing-input" type="email" name="last-name" id="first-name" placeholder="Last name" />

                                <Input className = "pricing-input" type="email" name="email" id="exampleEmail" placeholder="name@your_company.com" />
                        
                            </FormGroup>
                    </Form>

                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}
