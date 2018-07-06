import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Card from './card'
export default class ProjectGrid extends Component {
  render() {
    return (
      <div className = "container">
         <Row style= {{margin:'auto'}}>
            <Col xs="12" sm = '6' md = '6'lg = '4'><Card/></Col>
            <Col xs ="12" sm = '6' lg = '4'><Card/></Col>
            <Col xs="12" sm = '6' lg = '4'><Card/></Col>
        </Row>
      </div>
    )
  }
};
