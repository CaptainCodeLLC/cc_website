import React, { Component } from 'react'
import {Container,Col,Card, CardImg, CardBody,CardText,CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class VerticalCard extends Component {
  render() {

    
    return (
      <Container sm ='12' md = '4' lg = '4'>
        <Col>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
                </CardBody>
              </Card>
           </Col>
      </Container>
    )
  }
}
