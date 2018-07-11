import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import Card from './card'
export default class ProjectGrid extends Component {
  
  render() {
    const cardData = [
      {
        title:'',
        description: '',
        icon: ''
      }
    
    ]
    return (
      <div>
        <h1 className = "grid-label">Product execution algorithm</h1>
        <br/>
         <Row>
            <Col xs="12" sm = '6' md = '6'lg = '4'>
              <Card title ="Ideate" iconlink = "./icons/ideate.png" description = "Think about a new idea or feature to add to your product or service that would add value to target users"/>
            </Col>
            <Col xs ="12" sm = '6' lg = '4'>
              <Card title = "Design" iconlink = "./icons/design.png" description = "Work on a plan to decide what would be the best way to implement how your previous idea works or looks."/>
            </Col>
            <Col xs="12" sm = '6' lg = '4'>
              <Card title = "Prototype" iconlink = "./icons/develop.png" description = "Implement the most fundamental version of your idea and test if your idea truly adds value to users."/>
            </Col>
            </Row>
            <Row class = 'mx-auto'>
            <Col xs="12" sm = '6' md = '6' lg = {{size:4, offset:'2'}}>
              <Card title = "Launch" iconlink = "./icons/launch.png" description = "Put your solution in the hands of users and analyze whether or not users are satisfied with the product."/>
            </Col>
            <Col xs="12" sm = '6' md = '6' lg = {{size:4}}>
              <Card title = "Iterate" iconlink = "./icons/loop.png" description = "You should repeat this process when you are considering making a new application or feature on your product."/>
            </Col>
        </Row>
        </div>

    )
  }
};
