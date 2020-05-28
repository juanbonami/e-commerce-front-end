import React, { Component } from 'react';
import logo from '../images/model2.jpg';
import logo2 from '../images/model1.jpg';
import logo3 from '../images/model3.jpg'
import { Navbar, Nav,
    Form, FormControl,
    Button, Container, Row, Col } from 'react-bootstrap';

export default class DefaultPage extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">My E-commerce site</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

  <Container fluid>
  <Row >
    <Col> <img src={logo} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo2} height="966" width="699" alt=""></img> </Col>
    <Col> <img src={logo3} height="966" width="699" alt=""></img> </Col>
  </Row>
  <br />
  <Row>
    <Col> 1 </Col>
    <Col> 2 </Col>
    <Col> 3 </Col>
  </Row>
</Container>
            </div>
        )
    }
}
