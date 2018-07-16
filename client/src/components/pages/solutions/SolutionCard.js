import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const SolutionCard = (props) => {
  return (
    <div>
      <Card style = {{height:'550px'}}>
        <CardBody>
          <CardTitle>{props.title} </CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Car cap" />
        <CardBody>
          <CardText>{props.body}</CardText>
          <CardLink href={props.demoLink}>Demo</CardLink>
          <CardLink href={props.infoLink}>More information</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default SolutionCard;