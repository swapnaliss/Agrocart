import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, FormGroup, FormCheck } from 'react-bootstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
  };

  const handleAcceptTermsChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Create New Account</Card.Title>
              <Form onSubmit={handleSubmit}>
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

                <FormGroup controlId="formAcceptTerms" className="mb-3">
                  <FormCheck
                    type="checkbox"
                    label="I Accept Terms and Conditions"
                    checked={acceptTerms}
                    onChange={handleAcceptTermsChange}
                  />
                </FormGroup>

                <Button variant="primary" type="submit" disabled={!acceptTerms}>
                  Sign Up
                </Button>

                <div className="text-center mt-3">
                  <span>Already have an account? </span>
                  <Button variant="link">Login</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
