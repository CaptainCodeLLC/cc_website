import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Card from './card';
import web from './assets/grid-world.png';


export default class ServicesContainer extends Component {
  render() {
    return (
      <Container id = "services-container">
            <h1 id = "services-header">Our services</h1>
         <hr/>
         <Row >
             <Col  xs = '12' md = '4' lg = '3'>

                <Card iconlink= {web} title = "Site Redesign" description= "Gelp"/>
             </Col>
             <Col xs = '12' md = '4' lg = '2'>
                <p className = "services-subheader">Mobile Optimization</p>
                <Card/>
             </Col>
             <Col xs = '12' md = '4' lg = '2'>
                <p className = "services-subheader">Website Audit</p>
                <Card/>
             </Col>
             <Col xs = '12' md = '4' lg = '2'>
                <p className = "services-subheader">
                    Search Engine Optimization
                </p>
                <Card/>
             </Col>
             <Col xs = '12' md = '4' lg = '2'>
                <p className = "services-subheader">Video and Photography</p>
                <Card/>
             </Col>
             
         </Row>
      </Container>
    )
  }
}
