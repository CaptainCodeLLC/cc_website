import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import VerticalCard from './verticalCard';

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
                    </Col>
                </Row>
            </Container>
        )
    }
}