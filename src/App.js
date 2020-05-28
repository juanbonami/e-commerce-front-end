import React from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
}

export default App;
