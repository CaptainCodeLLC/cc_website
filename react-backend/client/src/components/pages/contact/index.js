import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Container, Row, Col,Button} from 'reactstrap';
export default class Contact extends Component {
  render() {
    return (
      <div>
          <Container>
              <br/>
              <h1>We'd love to hear from you!</h1>
              <hr/>
                <Col id = "contact-page-container" xs="12" md="6" >
                    <Form>
                    <FormGroup>
                            <Label for="name">What's your name?</Label>
                            <Row xs= "12">
                                <Col>
                                    <Input type="name" name="first-name" id="example_name" placeholder="First Name" />
                                </Col>
                                <Col>
                                    <Input type="name" name="last-name" id="example_name" placeholder="Last Name" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Where can we reach you?</Label>
                            <Input type="email" name="email" id="example_name" placeholder="name@email.com*" />
                        </FormGroup> 
                        <FormGroup>
                             <Input type="email" name="email" id="example_name" placeholder="+1 (555) 555-5555" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Tell us what's happening.</Label>
                            <Input type="textarea" placeholder = "What's on your mind?*" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>
                </Col>
              
                <Button color = "success">Submit</Button> 
                <br/>
                <br/>
                <p3>* is required</p3>
            </Container>
      </div>
    )
  }
}
