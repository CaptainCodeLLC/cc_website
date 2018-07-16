import React, { Component } from 'react';
import {Nav, NavLink, Input, Container, Row,Col,Button } from 'reactstrap';
import SolutionCard from './SolutionCard';
import VerticalCard from './verticalCard';
import Carousel from './Carousel';
import StandardCard from './Card';
import Modal from './Modal' ; 


export default class Solutions extends Component {
    
  render() {

    return (
      <div>
        <h1 className = "page-header">Our Solutions</h1>
        <Container>
            <Row>
                <Nav style = {{margin:'auto'}}>
                    <NavLink href="#business_subsection">Business</NavLink>
                    <NavLink href="#education_subsection">Education</NavLink> 
                    <NavLink href="#home_subsection">Home and Personal</NavLink> 
                    <NavLink href="#pricing">Pricing</NavLink>
                </Nav>
            </Row>
        </Container>
        <hr/>
        <Container style = {{margin: "auto"}}>
            <Row>
                <Input id = 'search' placeHolder = 'Search'/>
            </Row>
            <Row>
                <Button color="success" style = {{margin:'auto', marginTop:'1vw'}}>Send</Button>
            </Row>
        </Container>
          
        <div id = "business_subsection">
            <Container>
            <h1 className="solution-header-text">Business Suite</h1> 
                <Row>
                    <Col lg='4'>
                        <VerticalCard imgSrc = "./icons/piggy-bank.png" 
                                      title = "Gold" subtitle = "A beautiful front facing site" 
                                      description= "Website that allows clients to view products/services and contact your business easily. Mobilly optimized" 
                                      buttonLabel = "Gold Clients" 
                                      pricing = {499.99}/>
                    </Col> 
                    
                    <Col lg='4'>
                        <VerticalCard imgSrc= "./icons/investment.png" 
                                      title = "Platinum" 
                                      subtitle = "A site with integrated backend functionality" 
                                      description = "Allows clients to sign up for a newsletter through web site. Search engine optimized" 
                                      buttonLabel = "Platinum Clients" 
                                      pricing = {1000}/>
                    </Col>    
                    
                    <Col lg='4'>
                        <VerticalCard imgSrc = "./icons/money-bag.png" 
                                      title = "Diamond" 
                                      subtitle = "A robust web application. Software as a service "  
                                      description ="A more sophisticated that is the main platform for clients to interact with your business"
                                      buttonLabel = "Diamond Clients"
                                      pricing = {"Contact us"}/>
             
                    </Col>
                </Row>
           </Container>
        </div>
            
            <div id="education_subsection">
                <Container>
                    <Row>
                        <Col>
                        <h1 id = "education-header-text" >Education</h1>
                        <p id="education-subtitle">
                            At Captain Code we believe that technology education will provide individuals with the foundation to pursue top paying and the most rewarding careers in the world. 
                        </p>

                            <Carousel/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="home_subsection">
                <Container>
                    <h1 id = "home-header-text">Home and Personal</h1>
                    <p id = "home-subtitle-text">Leverage cutting edge technology to make your home and appliances work around your life.</p>    
                    <Row>
                        <Col>
                            <SolutionCard title = "Smart Mirror" 
                                          subtitle = "Configurable mirror that plays music, shows calendar and daily tasks." 
                                          body = "Do you ever wonder what's on your schedule for the day? Are you ever curious about current events? With this smart mirror, you can have all that and much more as you get ready for your day." 
                                          demoLink = "https://www.youtube.com/"
                                          infoLink = "/projects/smart_mirror"/>
                        </Col>
                        <Col>
                            <SolutionCard title = "Robotic Bartender" 
                                          subtitle = "Robot that makes your mixed drinks with a push of a button" 
                                          body = "We've all had that weekend where our friends are over for drinks and someone always claims to be a bartender. Yeah no. Guarantee the ratio is perfect and automate the mixing so you can enjoy the company." 
                                          demoLink = "https://www.youtube.com/"
                                          infoLink = "/projects/smart_mirror"/>
                        </Col>
                        <Col>
                            <SolutionCard title = "Smart Home" 
                                          subtitle = "Make your home work around you"
                                          body = "Do you ever wonder what's on your schedule for the day? Are you ever curious about current events? With this smart mirror, you can have all that and much more as you get ready for your day." 
                                          demoLink = "https://www.youtube.com/"
                                          infoLink = "/projects/smart_mirror"/>
                        </Col>
                    </Row>
                
                </Container>              
                </div>


            <div id  = "pricing_subsection">
          

                    
                    <h1>Any questions?</h1>
                    <p>Everyones project is different, tell us a little more about what you want to build and we'll reach out within the next 24 hours!</p>
                        <Modal buttonLabel = "Send us a message" style = {{margin:'auto' }}/>
            </div>
        </div>

    )
  }
}
