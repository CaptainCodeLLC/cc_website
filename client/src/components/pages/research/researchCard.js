import React, { Component } from 'react';
import {CardImg, Card, CardTitle, CardText,Button} from 'reactstrap';
export default class ResearchCard extends Component {
  render() {
    return (
      <div>
      <a href = {this.props.link}>
        <Card body inverse style={{ padding:'0', height:'200px', borderRadius:100 }}>
            <CardTitle  id = "overlay" />
            <CardTitle id="title-content" style = {{zIndex:'2', marginTop:'40px'}}>{this.props.title}</CardTitle>
              <img className = 'research-image ' style ={{overflow:'hidden'}} src = {this.props.src}/>
        </Card>
        </a>
      </div>
    )
  }
};
