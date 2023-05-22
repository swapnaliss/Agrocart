import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
           product section
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
