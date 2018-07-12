import React, { Component } from 'react'
import {Container,Col,Card, CardImg, CardBody,CardText,CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class VerticalCard extends Component {
  render() {

    
    return (
      <Container sm ='12' md = '4' lg = '4' >
        <Col>
          <Card>
            <CardImg top width="100%" src={this.props.imgSrc} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                <hr/>
                <CardText>{this.props.description}</CardText>
                <Button color= "success">{this.props.buttonLabel}</Button>
                </CardBody>
              </Card>
           </Col>
      </Container>
    )
  }
}
