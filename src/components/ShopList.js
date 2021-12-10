import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

export default function ShopList({ data: items }) {
  return (
    <div className="shop-list">
      <Container className="d-flex flex-wrap justify-content-center align-items-center gap-4" md={5} xs={8}>
        {console.log(items)}
        {items.map((item) => (
            <Card key={item.id} bg="light" text="dark"style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.pic} />
              <Card.Header>{item.title}</Card.Header>
              <Card.Body>
                <Card.Text>{item.desc.substring(0, 100)}...</Card.Text>
                <Card.Subtitle>{item.price} $</Card.Subtitle>
                <Link to={`/kitchen/${item.id}`}>
                  <Button className="my-2" variant="primary">
                    More details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
        ))}
      </Container>
    </div>
  );
}
