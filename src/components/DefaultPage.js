import React, { Component } from 'react';
import { Navbar, Nav,
    Form, FormControl,
    Button, Container, Row, Col } from 'react-bootstrap';

export default class DefaultPage extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
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
  <h1>E-Commerce site</h1>
  <Container fluid>
  <Row >
    <Col> 1 </Col>
    <Col> 2 </Col>
    <Col> 3 </Col>
  </Row>
  
  
</Container>
            </div>
        )
    }
}
