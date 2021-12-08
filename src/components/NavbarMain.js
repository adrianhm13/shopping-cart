import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarMain() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="py-4" >
        <Container>
          <NavLink exact to="/"className="navbar-brand" >MinimFurn</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="gap-3" >
              <NavLink exact to="/"className="nav-link">Home</NavLink>
              <NavLink exact to="/shop" className="nav-link">Shop</NavLink>
              <NavLink exact to="/about" className="nav-link">About</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
