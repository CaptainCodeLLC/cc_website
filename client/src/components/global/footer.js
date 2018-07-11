import React, { Component } from 'react';
import { Button, Container, Row, Col, Input } from 'reactstrap';
import axios from 'axios';

class Footer extends Component {
  state = {
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
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
      <div id="footer-container">
      <Container>
        <Row>
          <Col className="footer-subgroup-outline" xs='6' md="3">
            <h1 className='header-text'>Resarch</h1>
            <p className="description-text">Some info</p>
          </Col>
          <Col  className="footer-subgroup-outline" id='footer-business-container' xs="6" md="3">
            <h1 className='header-text'>Business</h1>
            <p className="description-text">
              <a className="footer-nav-link" href="/solutions#business_subsection">Business Solutions</a>
            </p>
            <p className="description-text">
              <a className="footer-nav-link" href="/solutions#education_subsection">Education</a>
            </p>  
            <p className="description-text">
              <a className="footer-nav-link" href="/solutions#home_subsection">Home and Personal</a>
            </p>
          </Col>
          <Col  className="footer-subgroup-outline" xs="6" md="3">
            <h1 className='header-text'>Press</h1>
            <p className="description-text">Some info</p>
          </Col>
          <Col className="footer-subgroup-outline" xs="6" md="3">
            <h1 className="header-text">Careers</h1>
            <p className="footer-nav-link">Some info</p>
          </Col>
        </Row>
        <br/>

        <Row>
          <Col>
          <h1 id="footer-email-newsletter"> Sign up for our newsletter</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{margin:'auto'}} lg='5' xs='10'>,
            <Input 
              style={{textAlign: 'center', borderRadius:50}} 
              placeholder="Your awesome email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            >
          </Input>
          </Col>
          <Button color="success" onClick={e => this.handleSubmit(e)}>Submit</Button>
        </Row>
        <br/>
        <Row>
          <Col sm='12' lg='12'> <p className="description-text">Crafted with <span style={{color:"#5bca57"}}>love</span> by our developers at Captain Code </p></Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Footer;