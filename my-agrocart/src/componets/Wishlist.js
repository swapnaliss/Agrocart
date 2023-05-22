import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const WishlistPage = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'image1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15,
      image: 'image2',
    },
    
  ];

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Wishlist</h2>
          {wishlistItems.length > 0 ? (
            <Row>
              {wishlistItems.map((item) => (
                <Col sm={4} key={item.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={item.image} alt={item.name} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>Price: ${item.price}</Card.Text>
                      <Button variant="primary">Move to Cart</Button>
                      <span className="favorite-icon ml-3">&#9825;</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>Your wishlist is empty.</p>
          )}
          <Button variant="primary">Continue Shopping</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WishlistPage;
