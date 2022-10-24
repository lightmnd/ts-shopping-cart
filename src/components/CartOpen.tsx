import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

type HandleCartVisibility = {
  openCart: boolean;
  closeCart: boolean;
};

export default function CartOpen({
  openCart,
  closeCart,
}: HandleCartVisibility) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        onClick={toggleShow}
        className="rounded-circle me-3"
        variant="outline-dark"
        style={{ width: "3rem", height: "3rem", position: "relative " }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-shopping-cart"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <div
          className="d-flex bg-danger rounded-circle justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: "0",
            right: "0",
            transform: "translate(25%, 25%)",
          }}
        >
          3
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
