import React, { Component } from 'react';
import {Card, CardTitle, CardText,Button} from 'reactstrap';
export default class ResearchCard extends Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
        </Card>
      </div>
    )
  }
};
