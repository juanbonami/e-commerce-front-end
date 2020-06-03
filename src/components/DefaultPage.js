// https://burst.shopify.com/ the site i got the images from 

import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/model2.jpg';
import logo2 from '../images/model1.jpg';
import logo3 from '../images/model3.jpg';
import { Navbar, Nav,
    Form, FormControl,
    Button, Container, Row, Col } from 'react-bootstrap';

export default class DefaultPage extends Component {
    render() {
        return (
            <div>
  <Header />

  <Container fluid>
  <Row>
    <Col> <img src={logo} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo2} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo3} height="966" width="699" alt=""></img> </Col>
  </Row>
  <br />
  <Row>
    <Col className="body-text"> <h1> Fashion for Men </h1> 
    <br /> <h1> Fashion for Women </h1>
    <br /> <h1> Accessories </h1>
     </Col>
  </Row>
</Container>
<Footer />
            </div>
        )
    }
}
