// https://burst.shopify.com/ the site i got the images from 

import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/model2.jpg';
import logo2 from '../images/model1.jpg';
import logo3 from '../images/model3.jpg';
import logo4 from '../images/red-on-red-fashion.jpg';
import logo5 from '../images/classy-tuxedo-fashion.jpg';
import logo6 from '../images/striped-blouse-fashion.jpg';

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
    <Col className="body-text"> <img className="pic-border" src={logo4} height="400" width="430" alt=""></img> </Col>
    <Col className="body-text"> <img className="pic-border" src={logo5} height="400" width="430" alt=""></img> </Col>
    <Col className="body-text"> <img className="pic-border" src={logo6} height="400" width="430" alt=""></img> </Col>
  </Row>
</Container>
<Footer />
            </div>
        )
    }
}
