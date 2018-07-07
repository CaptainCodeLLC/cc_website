import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ResearchCard from './researchCard';

export default class Research extends Component {
  render() {
    return (
      <div>
        <br/>
          <h1>Research Topics</h1>
          <hr/>
        <Container>
            <Row>
                <Col lg = '4'>
                  <ResearchCard/>
                </Col>
                <Col lg = '4'>
                  <ResearchCard/>
                </Col>
                <Col lg = '4'>
                  <ResearchCard/>
                </Col>
            </Row>
            <br/>
            <Row>
            <Col lg = '4'>
                  <ResearchCard/>
                </Col>
                <Col lg = '4'>
                  <ResearchCard/>
                </Col>
                <Col lg = '4'>
                  <ResearchCard/>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
};
