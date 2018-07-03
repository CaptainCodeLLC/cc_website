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
        
        <div className= "global-solution-container">
            <Container style = {{margin: "auto"}}>
                <Row>
                    <Input id = 'search' placeHolder = 'Search'/>
                </Row>
                <Row>
                    <Button color="success" style = {{margin:'auto', marginTop:'1vw'}}>Send</Button>
                </Row>
            </Container>
            
            <div className = "solution-page-content">
            <div id="business_subsection"></div>
                <h1 className="solution-header-text">Business Suite</h1> 
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <VerticalCard title = "object1" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {4.12}/>
                    </Col> 
                    
                    <Col>
                        <VerticalCard title = "object1" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {4.12}/>
                    </Col>    
                    
                    <Col>
                        <VerticalCard title = "object1" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {4.12}/>
                    </Col>       
            
 
                </Row>
           </Container>
=======
           <div className = "content-subsection">
            <div id="business_subsection">
                    <VerticalCard title = "object1" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {4.12}/>
                    <VerticalCard title = "object2" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {`400.20`}/>
                    <VerticalCard title = "object2" description = "Some information about the happy object" src = "http://via.placeholder.com/240x300" pricing = {`2002.00`}/>
                </div>
            </div>
>>>>>>> cca12d08bbe8097d7f45f9ff56eaf3a4ab11e20b

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
                    <Container>
                        <Row>
                            <Col>
                                <SolutionCard/>
                            </Col>
                            <Col>
                                <SolutionCard/>
                            </Col>
                            <Col>
                                <SolutionCard/>
                            </Col>
                        </Row>
                    </Container>              
                </div>
            </div>
            <div className="content-subsection">
                <div id="pricing">
                    <h1>Pricing</h1>
                    <div className = "container" id="basic-products-subsection">

                            <Container>
                                <Row>
                                    <Col>
                                        <StandardCard/>
                                    </Col>
                                    <Col>
                                        <StandardCard/>
                                    </Col>
                                    <Col>
                                    <StandardCard/>
                                    </Col>
                                </Row>
                            </Container>
                
                    </div>
                    <br/>
                    <h1>Any questions?</h1>
                    <p>Everyones project is different, tell us a little more about what you want to build and we'll reach out within the next 24 hours!</p>
                        <Modal buttonLabel = "Send us a message" style = {{margin:'auto' }}/>

                   

                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}
