import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 3',
      price: 15,
      quantity: 1,
    },
  ];

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Cart</h2>
          {cartItems.length > 0 ? (
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <Button variant="danger">Remove</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-right">Total:</td>
                  <td>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </Table>
          ) : (
            <p>Your cart is empty.</p>
          )}

          {/* Continue Shopping Button */}
          <Button variant="primary">Continue Shopping</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
