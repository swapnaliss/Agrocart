import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductListingPage = () => {
  return (
    <Container>
      <Row className="mt-4">
        {/* Filter Section */}
        <Col sm={3}>
         Filter Section
         </Col>

        {/* Product Listing Section */}
        <Col sm={9}>
          <Row>
           {/* Product Cards */}
           {[...Array(20)].map((_, index) => (
              <Col sm={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="https://example.com/product-image.jpg" alt="Product" />
                  <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>Price: $10</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                    <span className="favorite-icon">&#9825;</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
