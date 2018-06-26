import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Card from './card'
export default class ProjectGrid extends Component {
  render() {
    return (
      <div className = "container">
         <Row>
          <Col s="3"><Card/></Col>
          <Col s="3"><Card/></Col>
          <Col s="3"><Card/></Col>
        </Row>
      </div>
    )
  }
};
