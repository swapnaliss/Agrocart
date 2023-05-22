import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ProductListingPage = () => {
    return (
        <Container>
            <Row className="mt-4">
                {/* Filter Section */}
                <Col sm={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Filter</Card.Title>
                            <Button variant="link">Clear Filter</Button>

                            {/* Filter by Price */}
                            <Form.Group controlId="priceFilter">
                                <Form.Label>Filter by Price</Form.Label>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>$0</span>
                                    <span>$100</span>
                                </div>
                                <Form.Control type="range" min="0" max="100" />
                            </Form.Group>
                            {/* Filter by Category */}
                            <Form.Group controlId="categoryFilter">
                                <Form.Label>Filter by Category</Form.Label>
                                <Form.Control as="select">
                                    <option value="">All Categories</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="vegetables">Vegetables</option>
                                </Form.Control>
                            </Form.Group>
                            {/* Filter by Rating */}
                            <Form.Group controlId="ratingFilter">
                                <Form.Label>Filter by Rating</Form.Label>
                                <Form.Control as="select">
                                    <option value="">All Ratings</option>
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars &amp; Above</option>
                                    <option value="3">3 Stars &amp; Above</option>
                                    <option value="2">2 Stars &amp; Above</option>
                                    <option value="1">1 Star &amp; Above</option>
                                </Form.Control>
                            </Form.Group>
                        </Card.Body>
                    </Card>

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
