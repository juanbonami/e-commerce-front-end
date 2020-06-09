// https://burst.shopify.com/ the site i got the images from 

import React, { Component } from 'react';
import Footer from './Footer';
import logo from '../images/model2.jpg';
import logo2 from '../images/model1.jpg';
import logo3 from '../images/model3.jpg';
import logo4 from '../images/red-on-red-fashion.jpg';
import logo5 from '../images/classy-tuxedo-fashion.jpg';
import logo6 from '../images/striped-blouse-fashion.jpg';
import logo7 from '../images/model-in-warm-light-posing.jpg';
import logo8 from '../images/rich-red-fashion.jpg';
import logo9 from '../images/silk-striped-blouse-fashion.jpg';

import { Container, Row, Col } from 'react-bootstrap';

export default class DefaultPage extends Component {
    render() {
        return (
            <div>

  <Container fluid>
  <Row>
    <Col> <img src={logo} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo2} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo3} height="966" width="699" alt=""></img> </Col>
  </Row>
  <br />
  <h3>YOUR LOCAL STORE IS OPEN</h3>
  <h1> <b> <u>SELECT STYLES UP TO 70% OFF </u> </b> </h1>
  <p>online only</p>
  <h1> <b> <u> SHOP NOW </u> </b> </h1>
  <Row>
    <Col className="body-text"> <img className="pic-border" src={logo4} height="400" width="420" alt=""></img>
    <h1 className="text-style"> <u> Great summer styles starting at $15 </u> </h1> </Col>
    <Col className="body-text"> <img className="pic-border" src={logo5} height="400" width="420" alt=""></img>
    <h1 className="text-style"> <u> Men's up to 40% off </u> </h1> </Col>
    <Col className="body-text"> <img className="pic-border" src={logo6} height="400" width="420" alt=""></img>
    <h1 className="text-style"> <u> Women's up to 50% off </u> </h1> </Col>
  </Row>
  <br />
  <Row>
    <Col> <img src={logo7} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo8} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo9} height="966" width="699" alt=""></img> </Col>
  </Row>
</Container>
<Footer />
            </div>
        )
    }
}
