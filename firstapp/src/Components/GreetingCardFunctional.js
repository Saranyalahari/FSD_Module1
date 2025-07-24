// src/GreetingCardFunctional.js
import React from 'react';
import { Navbar, Nav, Button, Container, Card } from 'react-bootstrap';

const GreetingCardFunctional = ({ name, message }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Card className="text-center shadow-sm">
          <Card.Body>
            <Card.Title>Hello from Functional Component, {name}!</Card.Title>
            <Card.Text>{message}</Card.Text>
            <Button variant="primary">Click Me!</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default GreetingCardFunctional;
