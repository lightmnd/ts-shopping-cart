import React, { useState } from "react";
import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartOpen from "./CartOpen";

export function Navbar() {
  const [open, setOpenClose] = useState(false);
  const { openCart, closeCart }: any = useShoppingCart();
  // console.log(isOpen);
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
      </Container>
      {<CartOpen openCart closeCart />}
    </NavbarBs>
  );
}
