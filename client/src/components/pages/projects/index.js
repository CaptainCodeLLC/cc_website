import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';

import ProjectImage from './projectImage';
import forde from './assets/images/forde.png';
import cc from './assets/images/cc.png'

export default class Projects extends Component {
  render() {

    const webProjects =[
      {
        imgSrc: cc,
        webDomain: "https://google.com",
        title: "Captain Code",
        git:"https://github.com/CaptainCodeLLC/cc_website"
      },
      {
        imgSrc: forde,
        webDomain: "https://fordelogistics.com",
        title: "Forde Logistics",
        git:"https://github.com/CaptainCodeLLC/forde_logistics"
      },
      {
        imgSrc: forde,
        title: "Forde Logistics",
        git:"https://github.com/CaptainCodeLLC/forde_logistics"
      },
      {
        imgSrc: forde,
        title: "Forde Logistics",
        git:"https://github.com/CaptainCodeLLC/forde_logistics"
      },
  ]

  const mobileProjects = [
    {

    }
  ]
  
  const webGrid = webProjects.map((project) => 
          <Col>
            <ProjectImage siteLink = {project.webDomain}
                          imgSrc = {project.imgSrc}
                          projectTitle = {project.title}
                          githubSrc ={project.git} 
                          />
          </Col>
  );


    return (
        <Container>
          <Row>      
            <Col lg= '7' className = "mx-auto">
              <br/>
              <h1><strong>Our Projects</strong></h1>
              <hr/>
              <p>  At Captain Code, we love to build technology and when we are not working on client projects,
                we are contributing to open source projects, learning new technologies, or working
                on new and exciting projects. This is just a peak of what we have been up to.
              </p>
              <br/>
            </Col>
            
          </Row>
          
          <Row>
            <h1> >Web</h1>
          </Row>
          <Row>
            {webGrid}
          </Row>
          <br/>
          <Row>
            <h1>Mobile</h1>

          </Row>
          <Row></Row>
        </Container>

    )
  }
}
