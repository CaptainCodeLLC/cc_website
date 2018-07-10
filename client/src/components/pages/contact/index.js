import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Container, Row, Col,Button} from 'reactstrap';
import axios from 'axios';


export default class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();

        axios.post('/users', this.state)
            .then(res => console.log('Axios Response', res))
            .catch(err => console.log(err))
    }

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
                                        <Input 
                                            type="name" 
                                            name="firstName" 
                                            id="example_name" 
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Col>
                                    <Col>
                                        <Input 
                                            type="name" 
                                            name="lastName" 
                                            id="example_name" 
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Col>
                                </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Where can we reach you?</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="example_name" 
                                    placeholder="name@email.com*" 
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)}
                                />
                        </FormGroup> 
                        <FormGroup>
                             <Input 
                                type="tel" 
                                name="phone" 
                                id="example_name" 
                                placeholder="+1 (555) 555-5555" 
                                value={this.state.phone}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Tell us what's happening</Label>
                                <Input 
                                    type="textarea" 
                                    placeholder="What's on your mind?*" 
                                    name="comments" 
                                    id="exampleText" 
                                    value={this.state.comments}
                                    onChange={e => this.handleChange(e)}
                                />
                        </FormGroup>
                    </Form>
                </Col>
              
                <Button color="success" onClick={e => this.handleSubmit(e)}>Submit</Button> 
                <br/>
                <br/>
                <p3>* is required</p3>
            </Container>
      </div>
    )
  }
}
