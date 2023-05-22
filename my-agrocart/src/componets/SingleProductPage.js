import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SingleProductPage = () => {
  const product = {
    name: 'Product Name',
    price: 10,
    image: 'https://example.com/product-image.jpg',
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Row className="align-items-center">
                <Col sm={6} className="mb-3">
                  <label htmlFor="quantityPicker">Quantity:</label>
                  <input type="number" id="quantityPicker" className="form-control" min="1" defaultValue="1" />
                </Col>
                <Col sm={6} className="mb-3">
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="primary ml-2">Remove</Button>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductPage;
