import React, { useState } from "react";
import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartOpen from "./CartOpen";

export function Navbar() {
  const [open, setOpenClose] = useState(false);
  const { openCart, isOpen }: any = useShoppingCart();
  console.log(isOpen);
  return (
    <NavbarBs sticky={"top"} className="bg-white shadow-sm mb-3">
      <Container className="navbar-container">
        <NavbarBs.Brand href="/home">Navbar</NavbarBs.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/home" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={
            open ? () => setOpenClose(false) : () => setOpenClose(true)
            // () => openCart(true)
            // items.isOpen ? () => items.openCart(false) : items.openCart(true)
          }
          className="rounded-circle"
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
      </Container>
      {open && <CartOpen />}
    </NavbarBs>
  );
}
