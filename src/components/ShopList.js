import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ShopList({ data: items }) {
  return (
    <div className="shop-list">
        {console.log(items)}
      {items.map((item) => (
        <div key={item.id}>
          <Card bg="light" text="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.pic} />
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>

              <Card.Text>{item.desc.substring(0, 100)}...</Card.Text>
              <Card.Subtitle>{item.price} $</Card.Subtitle>
              <Link to={`/kitchen/${item.id}`}>
                <Button className="my-2"variant="primary">More details</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
