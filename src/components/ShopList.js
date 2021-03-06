import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

export default function ShopList({ data: items }) {
  return (
    <div className="shop-list">
      <Container className="d-flex flex-wrap justify-content-center align-items-center gap-5" md={5} xs={8}>
        {console.log(items)}
        {items.map((item) => (
            <Card key={item.id} bg="light" text="dark"style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.pic} />
              <Card.Header>{item.title}</Card.Header>
              <Card.Body>
                <Card.Text>{item.desc.substring(0, 100)}...</Card.Text>
                <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                <Card.Subtitle>$ {item.price}.00</Card.Subtitle>
                <Link to={`/products/${item.id}`} role="button" className="btn btn-outline-primary">
                  More info
                </Link>
                </div>
              </Card.Body>
            </Card>
        ))}
      </Container>
    </div>
  );
}
