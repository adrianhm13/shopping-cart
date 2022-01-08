import { NavLink } from "react-router-dom";

//Bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCart from "./ShoppingCart";

export default function NavbarMain() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="py-4 border-bottom">
        <Container>
          <NavLink exact to="/shopping-cart/home" className="navbar-brand">
            MinimFurn
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end gap-5"
            id="basic-navbar-nav"
          >
            <Nav className="gap-3">
              <NavLink exact to="/shopping-cart/home" className="nav-link">
                Home
              </NavLink>
              <NavLink exact to="/shopping-cart/shop" className="nav-link">
                Shop
              </NavLink>
              <NavLink exact to="/shopping-cart/about" className="nav-link">
                About
              </NavLink>
            </Nav>
            <ShoppingCart/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
