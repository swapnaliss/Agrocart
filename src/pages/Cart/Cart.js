import React from "react";
import { useState, useEffect } from "react";
import { useData } from "../../context";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import { CartPrice } from "./component/CartPrice";
import { CartProduct } from "./component/CartProduct";
import { CouponModal } from "./component/CouponModal";

export function Cart() {
  const { cart, changeTitle } = useData();
  const isCartHasItem = cart.length > 0;
  const [couponModal, setCouponModal] = useState(false);

  useEffect(() => changeTitle("Cart"), []);

  return (
    <>
      <Container className="cart-container">
        <Row className="cart-main-container justify-content-center">
          <h3>MY CART {isCartHasItem && `(${cart.length})`}</h3>
          <Col md={8}>
            {isCartHasItem ? (
              cart.map((product) => (
                <CartProduct key={product._id} product={product} />
              ))
            ) : (
              <h1 className="text-center"> Your Cart Is Empty ! ☹️</h1>
            )}
          </Col>
          {isCartHasItem && (
            <Col md={4}>
              <CartPrice setCouponModal={setCouponModal} />
            </Col>
          )}
        </Row>
      </Container>
      <Modal show={couponModal} onHide={() => setCouponModal(false)}>
        <CouponModal setCouponModal={setCouponModal} />
      </Modal>
    </>
  );
}
