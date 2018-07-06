import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import VerticalCard from './verticalCard';
import ProjectCol from './projectCol';

import {HorizontalCard} from './horizontalCard';

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <br/>
            <h1><strong>Our Projects</strong></h1>
            <hr/>
            <p>  At Captain Code, we love to build technology and when we are not working on client projects,
              we are contributing to open source projects, learning new technologies, or working
              on new and exciting projects. This is just a peak on what we have been up to.
            </p>
            {/*id = "project-blurb">*/}
            <br/>
          </Col>
        </Row>
        <Row>
         {/* <Col>
            <VerticalCard title = "Project1"  src = "http://via.placeholder.com/350x300" pricing = {4.12}/>     
          </Col>

          <Col lg = '6'>
            <h1>Text</h1>
            <hr style = {{width: '100%'}}/>
            <p>Information about project</p>
         </Col>*/}
         <ProjectCol/>
        </Row>

      </Container>
    )
  }
}
