import React, { Component } from 'react';
import Header from './Header';
import Checkout from './Checkout';
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
    <Col className="body-text"> Fashion for Men 
    <br /> Fashion for Women
    <br /> Accessories </Col>
  </Row>
</Container>
<Checkout />
            </div>
        )
    }
}
