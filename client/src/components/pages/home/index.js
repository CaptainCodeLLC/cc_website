import React, { Component } from 'react';
import { Form, FormGroup, Jumbotron, Input, Button } from 'reactstrap';
import axios from 'axios';

import ProjectGrid from './projectGrid';

export default class Home extends Component {
  state = {
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/emails', this.state)
      .then(res => console.log('Axios Response', res))
      .catch(err => console.log(err))

    this.setState({
      email: ''
    })
  }

  render() {
    return (
      <div className = "landing-container">
        <div className = "container">
      
        <Jumbotron className = "jumbotron-container">
          <h1 id= "jumbotron-text" className="display-2">Build. Teach. Inspire!</h1>
          <p className="lead">We build scalable and long-lasting software solutions focused on transparency and security. </p>
          <hr className="my-2" />
          <p>If you would like to hear about what we are up to, including special offers and free workshops, drop your email below <span role = 'img' aria-label = "sunglasses-emoji">😎</span></p>
          <FormGroup>
            <Input 
              style={{width: '20em', textAlign:'center', margin:'auto', marginBottom:10 ,borderRadius:50}} 
              type="email" 
              name="email" 
              id="exampleEmail" 
              placeholder="Enter your email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          
            <Button 
              color='success' 
              style={{borderRadius:50, width:100}}
              onClick={e => this.handleSubmit(e)}
            >
            Submit
            </Button>
          </FormGroup>
        </Jumbotron>
        <Form>
            
           
        </Form>
        </div>
        <ProjectGrid/>
     
      </div>
    )
  }
};
