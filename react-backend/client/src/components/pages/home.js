import React, { Component } from 'react';
import {Form, FormGroup, Jumbotron,Label, Input,Row,Button} from 'reactstrap';

import ProjectGrid from '../projectGrid';
export default class Home extends Component {
  render() {
    return (
      <div className = "landing-container">
        <div className = "container">
        <br/><br/>
        <Jumbotron>
            <h1 className="display-3">Build. Teach. Inspire</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <FormGroup>
                <Input style= {{width: '20em',textAlign:'center', margin:'auto'}} type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                <Button color = 'success' >Submit</Button>
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
