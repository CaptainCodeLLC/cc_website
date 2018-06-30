import React, { Component } from 'react';
import {Form, FormGroup, Jumbotron,Label,Footer, Input,Row,Button} from 'reactstrap';

import ProjectGrid from './projectGrid';
export default class Home extends Component {
  render() {
    return (
      <div className = "landing-container">
        <div className = "container">
      
        <Jumbotron className = "jumbotron-container">
            <h1 id= "jumbotron-text" className="display-2">Build. Teach. Inspire!</h1>
            <p className="lead">We believe in building scalable and long-lasting software solutions focused on transparency and security. </p>
            <hr className="my-2" />
            <p>If you would like to hear about what we are up to, including special offers and free workshops, drop your email below 😎</p>
            <FormGroup>
                <Input style= {{width: '20em', textAlign:'center', margin:'auto', marginBottom:10 ,borderRadius:50}} type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
              
                <Button color = 'success' style = {{borderRadius:50, width:100}} >Submit</Button>
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
