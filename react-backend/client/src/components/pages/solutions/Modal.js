import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Row, Form, Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>We'd love to hear from you</ModalHeader>
          <ModalBody>
          <Container className = "contact-grid">
            <Form>
                <Row>
                    <Col>
                        <Input className = "pricing-input" type="email" name="first-name" id="first-name" placeholder="First name" />
                    </Col>
                    <Col>
                        <Input className = "pricing-input" type="email" name="last-name" id="first-name" placeholder="Last name" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Input className = "pricing-input" type="email" name="email" id="exampleEmail" placeholder="Phone number" />
                    </Col>
                    <Col>
                        <Input className = "pricing-input" type="email" name="email" id="exampleEmail" placeholder="name@your_company.com" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input className = "pricing-input" type="email" name="email" id="exampleEmail" placeholder="Let us know how we can help." />
                    </Col>
                </Row>
            </Form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Send</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
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