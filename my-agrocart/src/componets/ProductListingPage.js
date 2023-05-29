import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.log(error));
    }, []);

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
                            {/* Sort by Price */}
                            <Form.Group controlId="priceSort">
                                <Form.Label>Sort by Price</Form.Label>
                                <Form.Control as="select">
                                    <option value="SelectOption">select</option>
                                    <option value="lowToHigh">Low to High</option>
                                    <option value="highToLow">High to Low</option>
                                </Form.Control>
                            </Form.Group>
                        </Card.Body>
                    </Card>

                </Col>

                {/* Product Listing Section */}
                <Col sm={9}>
                    <Row>
                        {/* Product Cards */}
                        {products.map(product => (
                            <Col sm={4} key={product._id} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={product.img} alt="Product" />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>Price: ${product.price}</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                        <BsHeartFill className="favorite-icon" />
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
