import { projectFirestore } from "../../firebase/config";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// Bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Icons
import FavIcon from "../../assets/fav.svg";
import ShippingIcon from "../../assets/shipping.svg";

export default function Item() {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [addedCart, setAddedCart] = useState(false);

  const { id } = useParams();

  const { addItem, listItems } = useContext(CartContext);

  const handleAdd = () => {
    addItem(item, id);
    setAddedCart(true);
  };
  useEffect(() => {
    projectFirestore
      .collection("products")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItem(doc.data());
          setError(false);
        } else {
          setError("The product does not exist");
        }
      });
  }, [id]);

  useEffect(() => {
    console.log('SOME fnct')
    if(listItems.some((item) => item.id === id)){
      setAddedCart(true)
    }else{
      setAddedCart(false)
    }
  }, [id, listItems]);

  return (
    <Container className="mt-4">
      {error && <p className="error">{error}</p>}

      {item && (
        <Row className="gap-5 justify-content-center">
          <Col xs="12" md="8" lg="7">
            <Image src={item.pic} fluid></Image>
          </Col>
          <Col xs="10" md="4" lg="4">
            <h2 className="display-2">{item.title}</h2>
            <hr></hr>
            <p style={{ textAlign: "justify" }}>{item.desc}</p>
            <hr></hr>
            <Container>
              <Row className="justify-content-center align-items-center my-3">
                <Col
                  xs="12"
                  lg="7"
                  className="d-flex flex-direction-row gap-3 justify-content-center"
                >
                  <h6 className="display-6">Price:</h6>
                  <h6 className="display-6">{item.price} $</h6>
                </Col>
                <Col xs="12" lg="5">
                  {!addedCart && (
                    <Button
                      variant="outline-primary"
                      onClick={() => handleAdd()}
                    >
                      Add to cart
                    </Button>
                  )}
                  {addedCart && (
                    <Button disabled variant="outline-primary">
                      Added
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
            <hr></hr>
            <Container>
              <Row className="d-flex gap-2">
                <Col xs="1">
                  <img src={FavIcon} alt="Favorite Icon"></img>
                </Col>
                <Col xs="10" className="d-flex justify-content-start">
                  <p className="text-muted" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum rutrum nunc in metus cursus eleifend.
                  </p>
                </Col>
              </Row>
              <Row className="d-flex gap-2">
                <Col xs="1">
                  <img src={ShippingIcon} alt="Shipping Icon"></img>
                </Col>
                <Col xs="10" className="d-flex justify-content-start">
                  <p className="text-muted" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum rutrum nunc in metus cursus eleifend.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      )}
    </Container>
  );
}
