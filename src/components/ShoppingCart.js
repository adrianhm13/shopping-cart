import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

// Bootstrap components
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
// Icons
import { ReactComponent as Cart } from "../assets/cart.svg";

export default function ShoppingCart() {
  const { listItems, total, increaseQty, decreaseQty } =
    useContext(CartContext);

  const [show, setShow] = useState(false);

  // Modal offscreen
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="position-relative">
        <Button onClick={handleShow} variant="link" className="p-0">
          <Cart fill="#936fac" />
        </Button>
        <Badge
          pill
          bg="primary"
          className="position-absolute"
          style={{ top: "-8px" }}
        >
          {listItems.length}
        </Badge>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {listItems &&
            listItems.map((item) => (
              <Container key={item.id}>
                <Row className="justify-content-center align-items-center">
                  <Col lg="5" xs="4">
                    <p className="leash m-0">{item.title}</p>
                  </Col>
                  <Col lg="7" xs="8">
                    <Container className="d-flex flex-row gap-2">
                      <Button
                        className="btn btn-danger"
                        size="sm"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -1
                      </Button>
                      <Button disabled size="sm">{item.qty}</Button>
                      <Button
                        className="btn btn-secondary"
                        size="sm"
                        onClick={() => increaseQty(item.id)}
                      >
                        +1
                      </Button>
                    </Container>
                  </Col>
                </Row>
                <hr></hr>
              </Container>
            ))}
          <h5 className="display-5 text-center">Total: {total} $</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
