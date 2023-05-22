import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, FormControl , FormGroup } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Form >
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <FormGroup controlId="formRememberMe" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    
                  />
                </FormGroup>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <div className="text-right mt-3">
                  <FormControl.Feedback type="valid">
                    <Button variant="link">Forgot your password?</Button>
                  </FormControl.Feedback>
                </div>

                <div className="text-center mt-3">
                  <span>New user? </span>
                  <Button variant="link">Create New Account</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
