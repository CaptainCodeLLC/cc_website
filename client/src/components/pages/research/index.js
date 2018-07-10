import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ResearchCard from './researchCard';

export default class Research extends Component {

 
  render() {
    const gridData = [
      {
        id:'artificial_intell_link',
        title:'Artificial Intelligence',
        imageSrc:'img/ai.jpg',
        link:'/artificial_intelligence'
      },
      {
        id:'machine_learning_link',
        title:'Machine Learning',
        imageSrc:'https://uploads.toptal.io/blog/image/443/toptal-blog-image-1407508081138.png',
        link:'/machine_learning'
      },
      {
        id:'distributed_systems_link',
        title:'Distributed Systems',
        imageSrc:'https://s.hswstatic.com/gif/dns-rev-3.jpg',
        link:'/distributed_systems'
      },
      {
        id:'computer_systems_link',
        title:'Internet of Things',
        imageSrc:'https://upload.wikimedia.org/wikipedia/commons/a/ab/Internet_of_Things.jpg',
        link:'/computer_systems'
      },
      {
        id:'virtual_reality_link',
        title:'Immersive Reality',
        imageSrc:'https://www.techworm.net/wp-content/uploads/2017/12/VRmainnew.jpg',
        link:'/virtual_augmented_reality'
      },
      {
        id:'hci_link',
        title:'Human Computer Interaction',
        imageSrc:'https://www.nitrd.gov/nitrdgroups/skins/vector/images/hciim.jpg',
        link:'/hci'
      },
    ]

    const gridItem = gridData.map((category) => 
      
        <Col sm ='6' lg = "4" key = {category.id}>
          <ResearchCard title = {category.title} src={category.imageSrc} link = {`/research`+category.link}/>
        <br/>
        </Col>
       
  
    );
  
    return (
     <Container>
       <br/>
         <h1>Research Topics</h1>
         <hr/>
         <br/>
         <Container>
           <Row>
            {gridItem}
          </Row>
         </Container>
     </Container>
    )
  }
};