import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Row, Form, Input } from 'reactstrap';
import axios from 'axios';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let {modal, ...rest} = this.state
    
    axios.post('/users', {...rest})
      .then(res => console.log('Axios Solutions Modal Response', res))
      .catch(err => console.log(err))
    
    this.toggle()

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: ''
    })
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>We'd love to hear from you</ModalHeader>
          <ModalBody>
          <Container className="contact-grid">
            <Form>
                <Row>
                    <Col>
                        <Input 
                          className="pricing-input" 
                          type="email" 
                          name="firstName" 
                          id="first-name" 
                          placeholder="First name" 
                          value={this.state.firstName}
                          onChange={e => this.handleChange(e)}
                        />
                    </Col>
                    <Col>
                        <Input 
                          className="pricing-input" 
                          type="email" 
                          name="lastName" 
                          id="first-name" 
                          placeholder="Last name"
                          value={this.state.lastName}
                          onChange={e => this.handleChange(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Input 
                      className="pricing-input" 
                      type="tel" 
                      name="phone" 
                      id="exampleEmail" 
                      placeholder="Phone number" 
                      value={this.state.phone}
                      onChange={e => this.handleChange(e)}
                    />
                    </Col>
                    <Col>
                        <Input 
                          className="pricing-input" 
                          type="email" 
                          name="email" 
                          id="exampleEmail" 
                          placeholder="name@your_company.com" 
                          value={this.state.email}
                          onChange={e => this.handleChange(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input 
                          className="pricing-input" 
                          type="textarea" 
                          name="comments" 
                          id="exampleEmail" 
                          placeholder="Let us know how we can help." 
                          value={this.state.comments}
                          onChange={e => this.handleChange(e)}
                        />
                    </Col>
                </Row>
            </Form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={e => this.handleSubmit(e)}>Send</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;


// // <Button style = {{margin:'auto'}}> Leave us a message </Button>
// <Container className = "contact-grid">
// <Form>
//     <Row>
//         <Col>
//             <Input className = "pricing-input" type="email" name="first-name" id="first-name" placeholder="First name" />
//         </Col>
//         <Col>
//             <Input className = "pricing-input" type="email" name="last-name" id="first-name" placeholder="Last name" />
//         </Col>
//     </Row>
//     <Row>
//         <Col>
//         <Input className = "email-input" type="email" name="email" id="exampleEmail" placeholder="name@your_company.com" />
//         </Col>
//     </Row>
// </Form>
// </Container>