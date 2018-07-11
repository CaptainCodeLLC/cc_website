import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import VerticalCard from './verticalCard';
import { Badge } from 'reactstrap';

export default class ProjectCol extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                         <VerticalCard title = "Project1"  src = "http://via.placeholder.com/350x300" pricing = {4.12}/>     
                    </Col>
  
                     <Col lg = '6'>
                        <h1>Text</h1>
                        <hr style = {{width: '100%'}}/>
                        <p>Information about project</p>
                        <Badge href="https://github.com/orgs/CaptainCodeLLC/teams/softwaredev" color="dimgrey">Github Repo |</Badge>
                        <Badge href="Youtube.com" color="dimgrey">Video Demo</Badge>
                    </Col>
                </Row>
            </Container>
        )
    }
}